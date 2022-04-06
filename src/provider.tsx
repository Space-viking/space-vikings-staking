import React from 'react'
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import { getLibrary } from './utils/web3React'
import { NetworkContextName } from './config/constants/misc'
import { Toaster } from 'react-hot-toast'

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)

if (window.ethereum) {
    window.ethereum.autoRefreshOnNetworkChange = true
}

const Providers: React.FC = ({ children }) => {
    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <Web3ProviderNetwork getLibrary={getLibrary}>
                <Toaster position="top-right" reverseOrder={false} />
                {children}
            </Web3ProviderNetwork>
        </Web3ReactProvider>

    )
}

export default Providers
