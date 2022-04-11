import { FakeToken, SpaceVikingsStacking } from 'config/types';
import { ContractTransaction } from '@ethersproject/contracts'
import { BigNumber } from '@ethersproject/bignumber';

import IBEP20Abi from 'config/abi/IBEP20.json'
import { first, toFinite } from 'lodash'
import { Call, nestedMulticall } from 'utils/multicall'
import { toBigNumber } from './converters';


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
export const fetchToken = async (tokenAddress?: string, account?: string, spender?: string): Promise<Token> => {
    const tokens = await fetchTokens([tokenAddress], account, spender)
    return first(tokens)
}
export const approve = (contract: FakeToken, amount: BigNumber, spender: string, account: string) => {
    return contract.approve(spender, amount, { from: account })
}

// stake calls
export const configureLocks = async (contract: SpaceVikingsStacking) => {
    return contract.allConfiguredLocks()
}
export const addStake = async (contract: SpaceVikingsStacking, amount: BigNumber, configId: number, account: string) => {
    return contract.stake(amount, configId, { from: account })
}
export const userStakes = (contract: SpaceVikingsStacking, account: string, addEarned: boolean) => {
    return contract.accountStakes(account, addEarned);
}
export const withDrawStake = async (contract: SpaceVikingsStacking, amount: BigNumber, stakeID: BigNumber, account: string) => {
    return contract.withdraw(amount, stakeID, { from: account })
}
export const getReward = async (contract: SpaceVikingsStacking, stakeID: number, account: string) => {
    return contract.getReward(stakeID, { from: account })
}
export const earnAmount = async (contract: SpaceVikingsStacking, acount: string, index: number) => {
    return contract.earned(acount, index);
}