/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface SpaceVikingsStackingInterface extends ethers.utils.Interface {
  functions: {
    "accountStakes(address,bool)": FunctionFragment;
    "allAccountStakes(address,uint256)": FunctionFragment;
    "allConfiguredLocks()": FunctionFragment;
    "configuredLocks(uint256)": FunctionFragment;
    "earned(address,uint256)": FunctionFragment;
    "exit(uint256)": FunctionFragment;
    "exitUnlocked()": FunctionFragment;
    "getAllRewards()": FunctionFragment;
    "getReward(uint256)": FunctionFragment;
    "initialize(address,address,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rewardsToken()": FunctionFragment;
    "stake(uint256,uint256)": FunctionFragment;
    "stakingToken()": FunctionFragment;
    "startTime()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateConfiguredLock(uint256,uint64,uint32)": FunctionFragment;
    "updateConfiguredLocks(tuple[])": FunctionFragment;
    "updateStartTime(uint256)": FunctionFragment;
    "withdraw(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "accountStakes",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "allAccountStakes",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allConfiguredLocks",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "configuredLocks",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "earned",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "exit", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "exitUnlocked",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getReward",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardsToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakingToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "startTime", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateConfiguredLock",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateConfiguredLocks",
    values: [{ time: BigNumberish; apy: BigNumberish }[]]
  ): string;
  encodeFunctionData(
    functionFragment: "updateStartTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "accountStakes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allAccountStakes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allConfiguredLocks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "configuredLocks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "exitUnlocked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardsToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "startTime", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateConfiguredLock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateConfiguredLocks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateStartTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "RewardPaid(address,uint256,uint256)": EventFragment;
    "Staked(address,uint256,uint256)": EventFragment;
    "Withdrawn(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardPaid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Staked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type RewardPaidEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    user: string;
    stakeId: BigNumber;
    reward: BigNumber;
  }
>;

export type StakedEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    user: string;
    stakeId: BigNumber;
    amount: BigNumber;
  }
>;

export type WithdrawnEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    user: string;
    stakeId: BigNumber;
    amount: BigNumber;
  }
>;

export class SpaceVikingsStacking extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: SpaceVikingsStackingInterface;

  functions: {
    accountStakes(
      account: string,
      addEarned: boolean,
      overrides?: CallOverrides
    ): Promise<
      [
        ([
          boolean,
          number,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          active: boolean;
          apy: number;
          started: BigNumber;
          unlock: BigNumber;
          lastUpdated: BigNumber;
          stake: BigNumber;
          currentRewards: BigNumber;
          withdrawnRewards: BigNumber;
        })[],
        BigNumber[]
      ] & {
        stakes: ([
          boolean,
          number,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          active: boolean;
          apy: number;
          started: BigNumber;
          unlock: BigNumber;
          lastUpdated: BigNumber;
          stake: BigNumber;
          currentRewards: BigNumber;
          withdrawnRewards: BigNumber;
        })[];
        stakesEarned: BigNumber[];
      }
    >;

    allAccountStakes(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        boolean,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        active: boolean;
        apy: number;
        started: BigNumber;
        unlock: BigNumber;
        lastUpdated: BigNumber;
        stake: BigNumber;
        currentRewards: BigNumber;
        withdrawnRewards: BigNumber;
      }
    >;

    allConfiguredLocks(
      overrides?: CallOverrides
    ): Promise<[([BigNumber, number] & { time: BigNumber; apy: number })[]]>;

    configuredLocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, number] & { time: BigNumber; apy: number }>;

    earned(
      account: string,
      stakeId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    exit(
      _stakeId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exitUnlocked(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAllRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getReward(
      _stakeId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _stakingToken: string,
      _rewardsToken: string,
      _startTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rewardsToken(overrides?: CallOverrides): Promise<[string]>;

    stake(
      _amount: BigNumberish,
      _configuredLock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakingToken(overrides?: CallOverrides): Promise<[string]>;

    startTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateConfiguredLock(
      configuredLock: BigNumberish,
      time: BigNumberish,
      apy: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateConfiguredLocks(
      locks: { time: BigNumberish; apy: BigNumberish }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateStartTime(
      _startTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      _amount: BigNumberish,
      _stakeId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  accountStakes(
    account: string,
    addEarned: boolean,
    overrides?: CallOverrides
  ): Promise<
    [
      ([
        boolean,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        active: boolean;
        apy: number;
        started: BigNumber;
        unlock: BigNumber;
        lastUpdated: BigNumber;
        stake: BigNumber;
        currentRewards: BigNumber;
        withdrawnRewards: BigNumber;
      })[],
      BigNumber[]
    ] & {
      stakes: ([
        boolean,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        active: boolean;
        apy: number;
        started: BigNumber;
        unlock: BigNumber;
        lastUpdated: BigNumber;
        stake: BigNumber;
        currentRewards: BigNumber;
        withdrawnRewards: BigNumber;
      })[];
      stakesEarned: BigNumber[];
    }
  >;

  allAccountStakes(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      boolean,
      number,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      active: boolean;
      apy: number;
      started: BigNumber;
      unlock: BigNumber;
      lastUpdated: BigNumber;
      stake: BigNumber;
      currentRewards: BigNumber;
      withdrawnRewards: BigNumber;
    }
  >;

  allConfiguredLocks(
    overrides?: CallOverrides
  ): Promise<([BigNumber, number] & { time: BigNumber; apy: number })[]>;

  configuredLocks(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, number] & { time: BigNumber; apy: number }>;

  earned(
    account: string,
    stakeId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  exit(
    _stakeId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exitUnlocked(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAllRewards(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getReward(
    _stakeId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _stakingToken: string,
    _rewardsToken: string,
    _startTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rewardsToken(overrides?: CallOverrides): Promise<string>;

  stake(
    _amount: BigNumberish,
    _configuredLock: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakingToken(overrides?: CallOverrides): Promise<string>;

  startTime(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateConfiguredLock(
    configuredLock: BigNumberish,
    time: BigNumberish,
    apy: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateConfiguredLocks(
    locks: { time: BigNumberish; apy: BigNumberish }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateStartTime(
    _startTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    _amount: BigNumberish,
    _stakeId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    accountStakes(
      account: string,
      addEarned: boolean,
      overrides?: CallOverrides
    ): Promise<
      [
        ([
          boolean,
          number,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          active: boolean;
          apy: number;
          started: BigNumber;
          unlock: BigNumber;
          lastUpdated: BigNumber;
          stake: BigNumber;
          currentRewards: BigNumber;
          withdrawnRewards: BigNumber;
        })[],
        BigNumber[]
      ] & {
        stakes: ([
          boolean,
          number,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          active: boolean;
          apy: number;
          started: BigNumber;
          unlock: BigNumber;
          lastUpdated: BigNumber;
          stake: BigNumber;
          currentRewards: BigNumber;
          withdrawnRewards: BigNumber;
        })[];
        stakesEarned: BigNumber[];
      }
    >;

    allAccountStakes(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        boolean,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        active: boolean;
        apy: number;
        started: BigNumber;
        unlock: BigNumber;
        lastUpdated: BigNumber;
        stake: BigNumber;
        currentRewards: BigNumber;
        withdrawnRewards: BigNumber;
      }
    >;

    allConfiguredLocks(
      overrides?: CallOverrides
    ): Promise<([BigNumber, number] & { time: BigNumber; apy: number })[]>;

    configuredLocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, number] & { time: BigNumber; apy: number }>;

    earned(
      account: string,
      stakeId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exit(_stakeId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    exitUnlocked(overrides?: CallOverrides): Promise<void>;

    getAllRewards(overrides?: CallOverrides): Promise<void>;

    getReward(_stakeId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    initialize(
      _stakingToken: string,
      _rewardsToken: string,
      _startTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rewardsToken(overrides?: CallOverrides): Promise<string>;

    stake(
      _amount: BigNumberish,
      _configuredLock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stakingToken(overrides?: CallOverrides): Promise<string>;

    startTime(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateConfiguredLock(
      configuredLock: BigNumberish,
      time: BigNumberish,
      apy: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateConfiguredLocks(
      locks: { time: BigNumberish; apy: BigNumberish }[],
      overrides?: CallOverrides
    ): Promise<void>;

    updateStartTime(
      _startTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      _amount: BigNumberish,
      _stakeId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "RewardPaid(address,uint256,uint256)"(
      user?: string | null,
      stakeId?: BigNumberish | null,
      reward?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { user: string; stakeId: BigNumber; reward: BigNumber }
    >;

    RewardPaid(
      user?: string | null,
      stakeId?: BigNumberish | null,
      reward?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { user: string; stakeId: BigNumber; reward: BigNumber }
    >;

    "Staked(address,uint256,uint256)"(
      user?: string | null,
      stakeId?: BigNumberish | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { user: string; stakeId: BigNumber; amount: BigNumber }
    >;

    Staked(
      user?: string | null,
      stakeId?: BigNumberish | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { user: string; stakeId: BigNumber; amount: BigNumber }
    >;

    "Withdrawn(address,uint256,uint256)"(
      user?: string | null,
      stakeId?: BigNumberish | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { user: string; stakeId: BigNumber; amount: BigNumber }
    >;

    Withdrawn(
      user?: string | null,
      stakeId?: BigNumberish | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { user: string; stakeId: BigNumber; amount: BigNumber }
    >;
  };

  estimateGas: {
    accountStakes(
      account: string,
      addEarned: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allAccountStakes(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allConfiguredLocks(overrides?: CallOverrides): Promise<BigNumber>;

    configuredLocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    earned(
      account: string,
      stakeId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exit(
      _stakeId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exitUnlocked(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAllRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getReward(
      _stakeId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      _stakingToken: string,
      _rewardsToken: string,
      _startTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rewardsToken(overrides?: CallOverrides): Promise<BigNumber>;

    stake(
      _amount: BigNumberish,
      _configuredLock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakingToken(overrides?: CallOverrides): Promise<BigNumber>;

    startTime(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateConfiguredLock(
      configuredLock: BigNumberish,
      time: BigNumberish,
      apy: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateConfiguredLocks(
      locks: { time: BigNumberish; apy: BigNumberish }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateStartTime(
      _startTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      _amount: BigNumberish,
      _stakeId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    accountStakes(
      account: string,
      addEarned: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allAccountStakes(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allConfiguredLocks(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    configuredLocks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    earned(
      account: string,
      stakeId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    exit(
      _stakeId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exitUnlocked(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAllRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getReward(
      _stakeId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _stakingToken: string,
      _rewardsToken: string,
      _startTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rewardsToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stake(
      _amount: BigNumberish,
      _configuredLock: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    startTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateConfiguredLock(
      configuredLock: BigNumberish,
      time: BigNumberish,
      apy: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateConfiguredLocks(
      locks: { time: BigNumberish; apy: BigNumberish }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateStartTime(
      _startTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      _amount: BigNumberish,
      _stakeId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
