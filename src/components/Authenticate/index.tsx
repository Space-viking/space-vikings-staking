import { Modal } from "react-responsive-modal";
import { Button } from 'reactstrap'
import Walletmodal from "./walletmodal";
import { useState } from 'react';
import { useActiveWeb3React } from "hooks/web3";
import useAuth from "hooks/useAuth";

function Authenticate() {
    const [modal, setmodal] = useState<boolean>(false)
    const openModal = (): void => setmodal(!modal);
    const { account } = useActiveWeb3React()
    const { login, logout } = useAuth()

    let nameSpace = ''
    if (account) {
        nameSpace = account.substring(0, 6) + ' ........ ' + account.substring(account.length - 5, account.length)
    }

    return (
        <div className="my-3 my-sm-0 ml-sm-auto">
            {!account ? <>
                <Button outline className="text-color font-weight-600 px-4 connect-btn" onClick={openModal}>Connect Wallet</Button>
                <Modal open={modal} center onClose={openModal}>
                    <Walletmodal onclose={openModal} login={login}/>
                </Modal>
            </> : <div className="text-color font-weight-600 px-4 connect-btn" onClick={() => logout()}>{nameSpace}</div>}
        </div>
    );
}

export default Authenticate;
