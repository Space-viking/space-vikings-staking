import { useStakingContract } from "hooks/useContract"
import { useCallback, useEffect, useState } from "react"
import { userStakes, addStake, configureLocks, getReward, handleTransaction, withDrawStake, approve } from "utils/callHelper"
import { BigNumber } from '@ethersproject/bignumber';
import { useActiveWeb3React } from "hooks/web3"
import { useToast } from "hooks/useToast";
import { ContractTransaction } from "ethers";
import { toBigNumber } from "utils/converters";


export const useStaking = () => {

    const { account } = useActiveWeb3React()
    const stakingContract = useStakingContract()
    const { toast, toastTypes } = useToast()

    const [loading, setLoading] = useState(false)
    const [locks, setLocks] = useState<any[]>()

    const [stakes, setStakes] = useState<any[]>([])
    const [earn, setEarn] = useState<BigNumber[]>([])

    const getStakes = useCallback(
        async (_account: string) => {
            // setLoading(true)
            try {
                let temp = await userStakes(stakingContract, _account, true)
                setStakes(temp.stakes)
                setEarn(temp.stakesEarned)
            } catch (error) {
                toast(toastTypes.error, "transaction Failed", (error as any).message)
            } finally {
                // setLoading(false)
            }
        }, [stakingContract])

    const configLock = useCallback(
        async () => {
            try {
                // setLoading(true)
                const configLog = await configureLocks(stakingContract)
                setLocks(configLog)
            } catch (error) {
                toast(toastTypes.error, "transaction Failed", (error as any).message)
            } finally {
                // setLoading(false)
            }
        }, [stakingContract])

    useEffect(() => {
        configLock()
        if (account) getStakes(account)
    }, [account, getStakes, configLock])

    const create = useCallback(
        async (amount: BigNumber, lockIndex: number) => {
            try {
                setLoading(true)
                const tx: ContractTransaction = await addStake(stakingContract, amount, lockIndex, account)
                toast(toastTypes.info, "transaction Info", "Creating Stake is in process")
                const success = await handleTransaction(tx)
                if (success) getStakes(account); toast(toastTypes.success, "Success", "Stake created")
            } catch (err) {
                toast(toastTypes.error, "transaction Failed", (err as any).message)
            } finally {
                setLoading(false)
            }
        }, [stakingContract])

    const withDraw = useCallback(
        async (amount: BigNumber, stakeID: number) => {
            setLoading(true)
            try {
                const tx: ContractTransaction = await withDrawStake(stakingContract, amount, toBigNumber(stakeID), account)
                toast(toastTypes.info, "Info", "Transaction is in process")
                const success = await handleTransaction(tx)
                if (success) getStakes(account); toast(toastTypes.success, "Success", "WithDrawn amount successfully")
            } catch (error) {
                toast(toastTypes.error, "Error", (error as any).message)
            } finally {
                setLoading(false)
            }
        }, [stakingContract])

    const reward = useCallback(
        async (stakeID: number) => {
            try {
                setLoading(true)
                const tx: ContractTransaction = await getReward(stakingContract, stakeID, account)
                toast(toastTypes.info, "Info", "Transaction is in process")
                const success = await handleTransaction(tx)
                if (success) getStakes(account); toast(toastTypes.success, "Success", "Rewards sent successfully")
            } catch (error) {
                toast(toastTypes.error, "Error", (error as any).message)
            } finally {
                setLoading(false)
            }
        }, [stakingContract])
    return { loading, locks, create, stakes, earn, withDraw, reward }
}