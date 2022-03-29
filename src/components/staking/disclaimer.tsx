import React from 'react'

interface IProps{
    close:()=>void
}


const Disclaimer:React.FC<IProps>=({close})=>{
    return(
        <div className='p-3'>
            <div className='d-flex justify-content-between align-items-center mb-2'>
                <p className='mb-0 text-danger h3'>DISCLAIMER</p>
                <i onClick={close} className="text-color pointer font-22 far fa-times"/>
            </div>
            <p className='text-color'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    )
}
export default Disclaimer