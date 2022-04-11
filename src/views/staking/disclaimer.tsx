import React, { useState } from 'react'
import { Modal } from 'reactstrap'


const data = [
    { timePeriod: "1 month", APY: "2%" },
    { timePeriod: "3 month", APY: "4%" },
    { timePeriod: "6 month", APY: "6%" },
    { timePeriod: "9 month", APY: "8%" },
    { timePeriod: "12 month", APY: "10%" }

]

const Disclaimer: React.FC = () => {
    const [opendisclaimer, setopendisclaimer] = useState<boolean>(false)
    const disclaimerclose = () => setopendisclaimer(!opendisclaimer)
    return (
        <>
            <p className='mb-0 px-2 text-color text-center'><i className="far fa-question-circle mr-2" />Read our <span onClick={disclaimerclose} className='pointer terms-condition'>terms & conditions</span> before proceeding</p>
            <Modal isOpen={opendisclaimer} centered className="disclaimer-box" toggle={disclaimerclose}>
                <div className='p-3'>
                    <div className='d-flex justify-content-between align-items-center mb-2'>
                        <p className='mb-0 text-color h3'>Terms</p>
                        <i onClick={disclaimerclose} className="text-color pointer font-22 far fa-times" />
                    </div>
                    {/* <p className='text-color'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p> */}
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className='text-color'>#</th>
                                <th scope="col" className='text-color'>Time Period/Amount</th>
                                <th scope="col" className='text-color'>APY</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((data, ind) => {
                                return (
                                    <tr key={ind}>
                                        <th scope="row" className='text-color'>{ind + 1}</th>
                                        <td className='text-color'>{data.timePeriod}</td>
                                        <td className='text-color'>{data.APY}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </Modal>
        </>
    )
}
export default Disclaimer