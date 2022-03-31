import addresses from 'config/constants/contracts'
import { Address } from 'config/constants/types'


export const getAddress = (address: Address): string | null => {
    const mainNetChainId = 1337
    const chainId = process.env.REACT_APP_CHAIN_ID
    console.log('chainID',chainId)
    if (!address) return null;
    return address[chainId] ? address[chainId] : address[mainNetChainId]
}
export const getTokenAddress = () => {
    return getAddress(addresses.token)
}
export const getMulticallAddress = () => {
    return getAddress(addresses.multiCall)
}
export const getTestAdress =()=>{
    return getAddress(addresses.Test)
}
export const getGreetingAddres =()=>{
    return getAddress(addresses.greeting)
}