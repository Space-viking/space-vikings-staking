import React from 'react'
import svtlogo from '../../images/coinlogo.png'
import {Button} from 'reactstrap' 

const Tierbox:React.FC=()=>{
    return(
        <div className="border-box px-2 py-4 px-md-3 py-sm-4">
            <div className='d-flex justify-content-between align-items-center pb-2'>
                <img className='mr-2' src={svtlogo} alt="..." />
                <p className='mb-0 text-white h5'>Stake 1</p>
            </div>
            <div className='my-3'>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='mb-2 tier-font text-color'>Staked Amount</p>
                    <p className='mb-2 tier-font text-white'>100000 SVT</p>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='mb-2 tier-font text-color'>Staked Duration</p>
                    <p className='mb-2 tier-font text-white'>1 Year</p>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='mb-2 tier-font text-color'>Withdraw TimeFrame</p>
                    <p className='mb-2 tier-font text-white'>24 July,2023 17:11:12 GMT+5</p>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='mb-2 tier-font text-color'>APY</p>
                    <p className='mb-2 tier-font text-white'>15 %</p>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='mb-2 tier-font text-color'>Reward Amount</p>
                    <p className='mb-2 tier-font text-white'>100000 SVT</p>
                </div>
                <hr className='footer-hr mt-2 mb-3' />
                <p className='text-center text-white h6'>Stake 1 earns 100000 SVT</p>
            </div>
            <div className='d-flex flex-column flex-md-row justify-content-between'>
                <Button className='tier-btn py-1 mb-3 mb-md-0 px-4'>Withdraw</Button>
                <Button className='tier-btn py-1 px-4'>Get Reward</Button>
            </div>
        </div>
    )
}
export default Tierbox