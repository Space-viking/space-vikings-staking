import { useMemo } from 'react'
import {
    getBep20Contract, getGreetingContract, getTestContract
} from 'utils/contractHelper'
import useWeb3 from './useWeb3'
import { useActiveWeb3React } from './web3'

export const useSigner = () => {
    const { library, account } = useActiveWeb3React()
    const signer = useMemo(() => (account ? library?.getSigner(account) : library), [library, account])
    return signer ?? library
}

export const useBEP20 = (address: string) => {
    const signer = useSigner()
    const web3 = useWeb3()
    return useMemo(() => address ? getBep20Contract(address, web3 ) : null, [address, web3 ])
}
export const useTestContract =()=>{
    const signer = useSigner()
    const web3 = useWeb3()
    return useMemo(()=>getTestContract(web3),[web3 ])
}

export const useGreeting =()=>{
    const web3 = useWeb3()
    return useMemo(()=>getGreetingContract(web3),[web3])
}