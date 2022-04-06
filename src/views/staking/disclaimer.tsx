import React, { useState } from 'react'
import { Modal } from 'reactstrap'


const Disclaimer: React.FC = () => {
    const [opendisclaimer, setopendisclaimer] = useState<boolean>(false)
    const disclaimerclose = (): void => setopendisclaimer(!opendisclaimer)
    return (
        <>
            <p className='mb-0 px-2 text-color text-center'><i className="far fa-question-circle mr-2" />Read our <span onClick={disclaimerclose} className='pointer terms-condition'>terms & conditions</span> before proceeding</p>
            <Modal isOpen={opendisclaimer} centered className="disclaimer-box" toggle={disclaimerclose}>
                <div className='p-3'>
                    <div className='d-flex justify-content-between align-items-center mb-2'>
                        <p className='mb-0 text-danger h3'>DISCLAIMER</p>
                        <i onClick={disclaimerclose} className="text-color pointer font-22 far fa-times" />
                    </div>
                    <p className='text-color'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </Modal>
        </>
    )
}
export default Disclaimer