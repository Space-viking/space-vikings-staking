// import BigNumber from 'bignumber.js'
import { IBEP20 } from '../config/types/IBEP20';
import { Contract, ContractTransaction, ContractReceipt } from '@ethersproject/contracts'
import { BigNumber } from '@ethersproject/bignumber';

import IBEP20Abi from '../config/abi/IBEP20.json'
import { first, toFinite } from 'lodash'
import { toBigNumber } from '../utils/converters'
import { Call, nestedMulticall } from 'utils/multicall'
import { Test } from 'config/types/test';


export interface Token {
    address: string
    name: string
    symbol?: string
    decimals?: number
    totalSupply?: BigNumber
    accountBalance?: BigNumber
    approvals?: { [spender: string]: BigNumber }
}

export const handleTransaction = async (transaction: ContractTransaction) => {
    const receipt = await transaction.wait()
    return receipt.status > 0
}

// token callAPI
export const fetchTokens = async (
    tokenAddresses: string[],
    account?: string,
    spender?: string,
): Promise<Token[]> => {
    if (!tokenAddresses) return []

    const nestedCalls: Call[][] = tokenAddresses.map((tokenAddress) => {
        const calls: Call[] = []
        calls.push({ address: tokenAddress, name: 'name' })
        calls.push({ address: tokenAddress, name: 'symbol' })
        calls.push({ address: tokenAddress, name: 'decimals' })
        calls.push({ address: tokenAddress, name: 'totalSupply' })

        if (account) {
            calls.push({ address: tokenAddress, name: 'balanceOf', params: [account] })
            if (spender) calls.push({ address: tokenAddress, name: 'allowance', params: [account, spender] })
        }
        return calls
    })
    const tokensData = await nestedMulticall(IBEP20Abi, nestedCalls)
    return tokensData?.reduce((result: Token[], tokenData: any[], idx: number) => {
        const token: Token = {
            address: tokenAddresses[idx].toLowerCase(),
            name: tokenData[0],
            symbol: tokenData[1],
            decimals: toFinite(tokenData[2]),
            totalSupply: toBigNumber(tokenData[3]),
        }
        if (account) token.accountBalance = toBigNumber(tokenData[4])
        if (account && spender) token.approvals = { ...token.approvals, [spender]: toBigNumber(tokenData[5]) }
        else token.approvals = {}
        return [...result, token]
    }, [])
}
export const fetchToken = async (tokenAddress: string, account?: string, spender?: string): Promise<Token> => {
    const tokens = await fetchTokens([tokenAddress], account, spender)
    return first(tokens)
}
export const approve = (contract: IBEP20, amount: BigNumber, spender: string, account: string) => {
    return contract.approve(spender, amount, { from: account })
}
export const postData = (contract: any, input: BigNumber) => {
    return contract.methods.setNumber(input).encodeABI()
}

export const fetchNumber = (contract: any) => {
    return contract.methods.getNumber().encodeABI()
}