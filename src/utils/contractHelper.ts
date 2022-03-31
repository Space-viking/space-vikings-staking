import { Web3Provider } from '@ethersproject/providers'
import { Signer } from '@ethersproject/abstract-signer'
import { Contract, ContractInterface } from '@ethersproject/contracts'

//addresses
import { getGreetingAddres, getTestAdress } from './addressHelper'

// ABI
import bep20Abi from 'config/abi/IBEP20.json'
import testAbi from 'config/abi/Test.json'
import greetingAbi from 'config/abi/greeting.json'

//types
import { IBEP20 } from 'config/types/IBEP20'
import { Test } from 'config/types/test'
import web3NoAccount from './web3'
import Web3 from 'web3'


const getContract = (address: string, abi: any, signerOrProvider?: Web3) => {
    // return new Contract(address, abi, signerOrProvider)
    const _web3 = signerOrProvider ?? web3NoAccount
    return new _web3.eth.Contract(abi, address)
}

export const getBep20Contract = (address: string, signerOrProvider?: Web3 ) => {
    return getContract(address, bep20Abi, signerOrProvider) as unknown as IBEP20
}
export const getTestContract = (signerOrProvider?: Web3) => {
    return getContract(getTestAdress(), testAbi, signerOrProvider) as unknown as Test
}

export const getGreetingContract=(signerOrProvider?: Web3)=>{
    return getContract(getGreetingAddres(),greetingAbi,signerOrProvider)  as any
}
