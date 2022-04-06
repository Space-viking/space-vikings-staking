import React from "react";
import { Navbar, NavbarBrand } from 'reactstrap';
import spacevikinglogo from 'images/space-viking-logo.svg'
import Authenticate from "components/Authenticate";

const Header: React.FC = () => {
    return (
        <div>
            <Navbar className="header py-3">
                <NavbarBrand href="/">
                    <img src={spacevikinglogo} className="w-100" style={{ height: '50px' }} alt="..." />
                </NavbarBrand>
                <Authenticate />
            </Navbar>
        </div>
    )
}
export default Header