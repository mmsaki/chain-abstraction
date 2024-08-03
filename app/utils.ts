import { checksumAddress, Address, isAddress } from "viem";

/**
 * @title EIP3770 Chain-specific address
 * @notice Reference: https://eips.ethereum.org/EIPS/eip-3770
 *
 * @param  {string} `shortName` is mandatory and MUST be a valid chain short name from https://github.com/ethereum-lists/chains
 * @param  {Hex}    `address`   is mandatory and MUST be a [ERC-55](/EIPS/eip-55) compatible hexadecimal address
 *
 * @return {string} "shortName:address"
 */
export function addressToEIP3770(shortName: string, address: Address): string {
  address = checksumAddress(address);
  if (!isAddress(address)) alert("Address is invalid");

  return shortName + ":" + address;
}
