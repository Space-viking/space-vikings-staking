import React, { useMemo, useState } from 'react'
import coinlogo from 'images/coinlogo40by40.png'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Button } from 'reactstrap'
import Disclaimer from './disclaimer';
import { useStaking } from 'callbacks/useStaking';
import { isEmpty, isNil, toFinite } from 'lodash';
import { validateSingle } from 'utils/validate';
import { BigNumber } from 'ethers';
import { formatBN, formatDuration } from 'utils/formatters';
import { useTokenApproval } from 'hooks/useApproval';
import { toBigNumber } from 'utils/converters';
// import Loader from 'components/Loader';

interface Props {
    create: (amount: BigNumber, index: number) => void
}
const Stakebox: React.FC<Props> = ({ create }) => {
    const [dropdownopen, setdropdownopen] = useState<boolean>(false)
    const [dropdownvalue, setdropdownvalue] = useState<string>('Select Duration')

    const { locks } = useStaking()
    const { token, approve, approving, approvedAmount } = useTokenApproval()

    const toggle = (): void => setdropdownopen(!dropdownopen)

    const [amount, setAmount] = useState<any>(0)
    const [index, setIndex] = useState<number>()

    const [amountError, setAmountError] = useState<string>('')
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        if (value && toFinite(value) < 0) {
            setAmountError("amount should be greater than 0")
        } else {
            const { value: amount, error } = validateSingle(value, 'BigNumber', 9);
            if (error) {
                setAmountError(error)
            } else {
                setAmountError(null)
                setAmount(amount)
            }
        }
    }
    const isApproved = useMemo(
        () => approvedAmount && approvedAmount.gt(BigNumber.from(0)) && approvedAmount.gte(toBigNumber(amount)),
        [amount, approvedAmount]
    )
    const onAprrove = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        if (amount > 0 && !approving) approve(toBigNumber(amount))
    }
    const valid = useMemo(() => isEmpty(amountError) && approvedAmount.gte(toBigNumber(amount)) && !isNil(index), [index, amountError, approvedAmount, amount])
    const approveValid = useMemo(() => isEmpty(amountError) && amount && !isNil(index), [index, amountError, amount])
    const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        create(amount, index)
    }

    return (
        <div className='border-box py-3'>
            <p className='text-white p-2 h3 text-center'>Stake</p>
            <div className="border-box p-3 mx-3 my-4 text-white">
                <div className="form-group d-flex justify-content-between align-items-start">
                    <label htmlFor="numb" className="text-color mb-3">Input</label>
                    <p className="mb-0 text-color">Balance : {!isEmpty(token) ? parseFloat(formatBN(token.accountBalance)).toFixed(5) : 0}</p>
                </div>
                <div className="d-flex justify-content-between align-items-start">
                    <input
                        type="number"
                        className="form-control bg-input text-color bg-transparent"
                        id="numb"
                        placeholder="0.0"
                        min="0"
                        onChange={onChange}
                    />
                    {amountError ? <div className='input-error' style={{ color: 'red' }}>{amountError}</div> : null}
                    <div className="mb-0 text-color"><img src={coinlogo} className='mr-2' alt="..."></img>SVT</div>
                </div>
                <div className="dropdown-duration">
                    <Dropdown isOpen={dropdownopen} toggle={toggle}>
                        <DropdownToggle caret>{dropdownvalue} <i className="fas fa-chevron-down" /></DropdownToggle>
                        <DropdownMenu>
                            {locks && locks.map((option, ind) => (
                                <DropdownItem
                                    key={ind}
                                    onClick={() => {
                                        setIndex(ind)
                                        setdropdownvalue(`${option.apy / 100}% apy ${formatDuration(option.time.toNumber())}`)
                                    }}
                                >{option.apy / 100}% apy - {formatDuration(option.time.toNumber())}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
            <Disclaimer />
            <div className='mx-3 my-4'>
                {isApproved ? <Button
                    className='stake-btn'
                    block
                    onClick={onSubmit}
                    disabled={!valid}
                >Stake</Button> : <Button
                    className='stake-btn'
                    block
                    onClick={onAprrove}
                    disabled={!approveValid}
                >Approve</Button>
                }
            </div>
        </div>
    )
}
export default Stakebox