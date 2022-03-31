import { Modal } from "react-responsive-modal";
import {Button} from 'reactstrap'
import Walletmodal from "./walletmodal";
import { useState } from 'react';

function Authenticate() {
    const [modal, setmodal] = useState<boolean>(false)
    const openModal = (): void => setmodal(!modal);
    return (
        <div className="my-3 my-sm-0 ml-sm-auto">
            <Button outline className="text-color font-weight-600 px-4 connect-btn" onClick={openModal}>Connect Wallet</Button>
            <Modal open={modal} center onClose={openModal}>
                <Walletmodal onclose={openModal} />
            </Modal>
        </div>
    );
}

export default Authenticate;
