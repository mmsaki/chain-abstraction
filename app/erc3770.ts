import { checksumAddress, Address, isAddress } from "viem";

/**
 * @title ERC3770 Chain-specific address
 * @notice Reference: https://eips.ethereum.org/EIPS/eip-3770
 *
 * @param  {string}  `shortName` is mandatory and MUST be a valid chain short name from https://github.com/ethereum-lists/chains
 * @param  {Address} `address`   is mandatory and MUST be a [ERC-55](/EIPS/eip-55) compatible hexadecimal address
 *
 * @return {string}  `shortName:address`
 */
export async function toERC3770String(shortName: string, address: Address): Promise<string | undefined> {
  // 1. Check valid address
  address = checksumAddress(address);
  if (!isAddress(address)) throw new Error(`Address is invalid: ${address}`);

  // 2. Check valid shortName for chain
  const chainList = await getChainList();
  const chainShortNames = chainList.map((chain: any) => chain.shortName);
  if (!chainShortNames.includes(shortName)) throw new Error(`Invalid chain shortName: ${shortName}`);

  return shortName + ":" + address;
}

/**
 * GET request for all chains from https://github.com/ethereum-lists/chains
 *
 * @returns response: Array<Chain> - An array of all the chains
 */
export async function getChainList() {
  try {
    const response = await fetch(`https://chainid.network/chains.json`, { cache: "force-cache" });
    if (!response.ok) throw new Error(`Response status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
