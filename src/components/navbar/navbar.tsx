import React, { useState } from "react";
import {Navbar,NavbarBrand} from 'reactstrap';
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import {Button} from 'reactstrap'
import Walletmodal from "../walletmodal/walletmodal";
import spacevikinglogo from '../../images/space-viking-logo.svg'

const Header:React.FC=()=>{
    const [modal, setmodal] = useState<boolean>(false)

    const openModal = (): void => setmodal(!modal);

    return(
        <div>
            <Navbar className="header py-3">
                <NavbarBrand href="/"><img src={spacevikinglogo} className="w-100" style={{height:'50px'}} alt="..." /></NavbarBrand>
                  <div className="my-3 my-sm-0 ml-sm-auto">
                    <Button outline className="text-color font-weight-600 px-4 connect-btn" onClick={openModal}>Connect Wallet</Button>
                    <Modal open={modal} center onClose={openModal}>
                        <Walletmodal onclose={openModal} />
                    </Modal>
                  </div>
            </Navbar>
        </div>
    )
}
export default Header