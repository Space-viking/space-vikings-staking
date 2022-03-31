/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
    BaseContract,
    BigNumber,
    BigNumberish,
    BytesLike,
    CallOverrides,
    ContractTransaction,
    Overrides,
    PopulatedTransaction,
    Signer,
    utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";


export interface TESTInterface extends utils.Interface {

    functions: {
        "setNumber(uint256)": FunctionFragment;
        "getNumber()": FunctionFragment;
    }

    encodeFunctionData(functionFragment: "setNumber", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getNumber", values?: undefined): string;

    decodeFunctionResult(functionFragment: "setNumber", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNumber", data: BytesLike): Result;
}

export interface Test extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;

    interface: TESTInterface;

    queryFilter<TEvent extends TypedEvent>(
        event: TypedEventFilter<TEvent>,
        fromBlockOrBlockhash?: string | number | undefined,
        toBlock?: string | number | undefined
    ): Promise<Array<TEvent>>;

    listeners<TEvent extends TypedEvent>(
        eventFilter?: TypedEventFilter<TEvent>
    ): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(
        eventFilter: TypedEventFilter<TEvent>
    ): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;

    functions: {
        setNumber(
            input: BigNumber,
            overrides?: Overrides & { from?: string | Promise<string> }
        ): Promise<ContractTransaction>;

        getNumber(overrides?: CallOverrides): Promise<[BigNumber]>;
    }
    callStatic: {
        setNumber(
            input: BigNumber,
            overrides?: CallOverrides
        ): Promise<BigNumber>;
        getNumber(overrides?: CallOverrides): Promise<BigNumber>;
    }
    estimateGas: {
        setNumber(
            input: BigNumber,
            overrides?: Overrides & { from: string | Promise<string> }
        ): Promise<BigNumber>;
        getNumber(overrides?: CallOverrides): Promise<BigNumber>;
    }
    populateTransaction: {
        setNumber(
            input: BigNumber,
            overrides?: Overrides & { from: string | Promise<string> }
        ): Promise<PopulatedTransaction>;
        getNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    }

    setNumber(
        input: BigNumber,
        overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
    getNumber(overrides?: CallOverrides): Promise<BigNumber>;
}