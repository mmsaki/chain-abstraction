import { addressToEIP3770 } from "./utils";
import { toHex } from "viem";

test("test EIP3770 Chain-specific address", () => {
  const shortName = "ETH";
  // Test invalid checksum address
  const nonChecksumAddress = "0x04655832bcb0a9a0bE8c5AB71E4D311464c97Af5";
  expect(addressToEIP3770(shortName, nonChecksumAddress)).toBe("ETH:0x04655832bcb0a9a0bE8c5AB71E4D311464c97AF5");

  // Test valid checksum address
  const validAddress = "0x04655832bcb0a9a0bE8c5AB71E4D311464c97AF5";
  expect(addressToEIP3770(shortName, validAddress)).toBe("ETH:0x04655832bcb0a9a0bE8c5AB71E4D311464c97AF5");
});
