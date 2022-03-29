import React, { useState } from 'react'
import coinlogo from '../../images/coinlogo40by40.png'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Button,Modal} from 'reactstrap'
import Disclaimer from './disclaimer';


const Stakebox:React.FC=()=>{
    const [dropdownopen,setdropdownopen]=useState<boolean>(false)
    const [dropdownvalue,setdropdownvalue]=useState<string>('Select Duration')
    const [opendisclaimer,setopendisclaimer]=useState<boolean>(false)

    const toggle=():void=>{
        setdropdownopen(!dropdownopen)
    }

    const disclaimerclose=():void=>{
        setopendisclaimer(!opendisclaimer)
    }

    return(
        <div className='border-box py-3'>
            <p className='text-white p-2 h3 text-center'>Stake</p>

            <div className="border-box p-3 mx-3 my-4 text-white">
                <div className="form-group d-flex justify-content-between align-items-start">
                    <label htmlFor="numb" className="text-color mb-3">Input</label>
                    <p className="mb-0 text-color">Balance : 52845155</p>
                </div>
                <div className="d-flex justify-content-between align-items-start">
                    <input
                        type="number"
                        className="form-control bg-input text-color bg-transparent"
                        id="numb"
                        placeholder="0.0"
                        min="0"
                    />
                    <p className="mb-0 text-color"><img src={coinlogo} className='mr-2' alt="..."></img>SVT</p>
                </div>
                <div className="dropdown-duration">
                    <Dropdown isOpen={dropdownopen} toggle={toggle}>
                        <DropdownToggle caret>{dropdownvalue} <i className="fas fa-chevron-down" /></DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={()=>setdropdownvalue('Action 1')}>Action 1</DropdownItem>
                            <DropdownItem onClick={()=>setdropdownvalue('Action 2')}>Action 2</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>

            <p className='mb-0 px-2 text-color text-center'><i className="far fa-question-circle mr-2"/>Read our <span onClick={disclaimerclose} className='pointer terms-condition'>terms & conditions</span> before proceeding</p>
            <Modal isOpen={opendisclaimer} centered className="disclaimer-box" toggle={disclaimerclose}>
                <Disclaimer close={disclaimerclose} />
            </Modal>
            <div className='mx-3 my-4'><Button className='stake-btn' block>Approve</Button></div>

        </div>
    )
}
export default Stakebox