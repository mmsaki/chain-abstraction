import { checksumAddress, Address, isAddress } from "viem";

/**
 *  Separate ERC3770 Chain-specific address from input string
 *
 * @param erc3770String {string}
 * @returns
 */
export function parseERC3770String(erc3770String: string) {
  // 1. remove any trailing spaces
  let str = erc3770String.trim();

  // 2. regex for colon separator format
  let re = /(\S+):(\S+)/;
  let arr = str.match(re);

  // 3. validate match from regex
  if (arr?.length === 3) {
    if (!isAddress(arr[2])) throw new Error(`Invalid address ${arr[2]}`);
    if (!isValidChainShortName(arr[1])) throw new Error(`Invalid chain shortName ${arr[1]}`);
    return {
      shortName: arr[1] as string,
      address: arr[2] as Address,
    };
  } else {
    throw new Error(`Invalid string ${str}`);
  }
}

/**
 * Make ERC3770 Chain-specific address from inputs
 * @notice Reference: https://eips.ethereum.org/EIPS/eip-3770
 *
 * @param  {string}  `shortName` i
 * @param  {Address} `address`   is mandatory and MUST be a [ERC-55](/EIPS/eip-55) compatible hexadecimal address
 *
 * @return {string}  `shortName:address`
 */
export async function toValidERC3770String(shortName: string, address: Address): Promise<string> {
  // 1. Check valid address
  address = checksumAddress(address);
  let isValidAddr = isValidAddress(address);

  // 2. Check valid shortName for chain
  let isValidName = await isValidChainShortName(shortName);

  if (isValidAddr && isValidName) return shortName + ":" + address;
  return "";
}

/**
 * Check if input param is a valid address
 *
 * @param address {Address} `0x${string}`
 * @returns { true | false }
 */
export function isValidAddress(address: Address) {
  if (!isAddress(address)) throw new Error(`Address is invalid: ${address}`);
  return true;
}

/**
 * Checks if shortName provided is a valid chain short name from https://github.com/ethereum-lists/chains
 *
 * @param shortName {string}
 * @returns { true | false }
 */
export async function isValidChainShortName(shortName: string): Promise<boolean> {
  const chainList = await getChainList();
  const chainShortNames = chainList.map((chain: any) => chain.shortName);
  if (!chainShortNames.includes(shortName)) throw new Error(`Invalid chain shortName: ${shortName}`);
  return true;
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
