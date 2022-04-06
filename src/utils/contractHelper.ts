import { Web3Provider } from '@ethersproject/providers'
import { Signer } from '@ethersproject/abstract-signer'
import { Contract, ContractInterface } from '@ethersproject/contracts'


//addresses
import {  getStakingAdress } from './addressHelper'
// ABI
import bep20Abi from 'config/abi/IBEP20.json'
import stakingABI from 'config/abi/Spacevikingabi.json'
//types
import { FakeToken } from 'config/types/FakeToken'
import { SpaceVikingsStacking } from 'config/types/SpaceVikingsStacking'


const getContract = (address: string, abi: any, signerOrProvider?: Web3Provider | Signer) => {
    return new Contract(address, abi, signerOrProvider)
}

export const getBep20Contract = (address: string, signerOrProvider?: Web3Provider | Signer) => {
    return getContract(address, bep20Abi, signerOrProvider) as unknown as FakeToken
}
export const geStakingContract = (signerOrProvider?: Web3Provider | Signer) => {
    return getContract(getStakingAdress(), stakingABI, signerOrProvider) as unknown as SpaceVikingsStacking
}
