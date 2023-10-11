/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IAccessManager,
  IAccessManagerInterface,
} from "../../../contracts/interfaces/IAccessManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IAccessManager__factory {
  static readonly abi = _abi;
  static createInterface(): IAccessManagerInterface {
    return new Interface(_abi) as IAccessManagerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IAccessManager {
    return new Contract(address, _abi, runner) as unknown as IAccessManager;
  }
}
