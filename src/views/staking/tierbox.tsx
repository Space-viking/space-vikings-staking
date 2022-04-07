import React from 'react'
import svtlogo from 'images/coinlogo.png'
import { Button } from 'reactstrap'
import { formatBN, formatDateTime, formatDuration } from 'utils/formatters'
import { BigNumber } from '@ethersproject/bignumber';


export interface istake {
    active: boolean,
    apy: number,
    started: BigNumber,
    unlock: BigNumber,
    lastUpdated: BigNumber,
    stake: BigNumber,
    currentRewards: BigNumber,
    withdrawnRewards: BigNumber
}

export interface IStakeCard {
    stake: istake,
    earn: BigNumber[],
    withDraw: (amount: BigNumber, id: number) => void,
    reward: (id: number) => void,
    index: number
}

const Tierbox: React.FC<IStakeCard> = ({ stake, earn, withDraw, reward, index }) => {

    return (
        <div className="border-box px-2 py-4 px-md-3 py-sm-4">
            <div className='d-flex justify-content-between align-items-center pb-2'>
                <img className='mr-2' src={svtlogo} alt="..." />
                <p className='mb-0 text-white h5'>Stake {index + 1}</p>
            </div>
            <div className='my-3'>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='mb-2 tier-font text-color'>Staked Amount</p>
                    <p className='mb-2 tier-font text-white'>{formatBN(stake.stake)} SVT</p>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='mb-2 tier-font text-color'>Staked Duration</p>
                    <p className='mb-2 tier-font text-white'>{formatDuration((stake.unlock.toNumber() - stake.started.toNumber()))}</p>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='mb-2 tier-font text-color'>Withdraw TimeFrame</p>
                    <p className='mb-2 tier-font text-white'>{formatDateTime((stake.unlock.toNumber()) * 1000)}</p>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='mb-2 tier-font text-color'>APY</p>
                    <p className='mb-2 tier-font text-white'>{stake.apy / 100}%</p>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='mb-2 tier-font text-color'>Withdrawn Rewards Amount</p>
                    <p className='mb-2 tier-font text-white'>{formatBN(stake.withdrawnRewards)} SVT</p>
                </div>
                <hr className='footer-hr mt-2 mb-3' />
                <p className='text-center text-white h6'>Stake {formatBN(stake.stake)} earns {formatBN(earn[index])} SVT</p>
            </div>
            <div className='d-flex flex-column flex-md-row justify-content-between'>
                <Button className='tier-btn py-1 mb-3 mb-md-0 px-4'
                    onClick={() => withDraw(stake.stake, index)}>Withdraw</Button>
                <Button className='tier-btn py-1 px-4'
                    onClick={() => reward(index)}>Get Reward</Button>
            </div>
        </div>
    )
}
export default Tierbox