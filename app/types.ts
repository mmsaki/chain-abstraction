type ERC3770 = string & { __erc3770Brand: never };

const erc3770Regex: RegExp = /^[\S]+:0x[A-Fa-f0-9]{40}/;

export function validateERC3770(str: ERC3770): boolean {
  return erc3770Regex.test(str);
}
