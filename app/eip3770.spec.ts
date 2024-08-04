import { addressToEIP3770 } from "./eip3770";

const address = "0x04655832bcb0a9a0bE8c5AB71E4D311464c97AF5";
const shortName = "eth";
const invalidShortName = "fakeChain0";

test("test EIP3770 Check invalid checksum address", async () => {
  // 1. Check invalid checksum address
  const nonChecksumAddress = "0x04655832bcb0a9a0bE8c5AB71E4D311464c97Af5";
  expect(await addressToEIP3770(shortName, nonChecksumAddress)).toBe("eth:0x04655832bcb0a9a0bE8c5AB71E4D311464c97AF5");
});

test("test EIP3770 Check correct checksum address", async () => {
  // 2. Check correct checksum address
  const validAddress = "0x04655832bcb0a9a0bE8c5AB71E4D311464c97AF5";
  expect(await addressToEIP3770(shortName, validAddress)).toBe("eth:0x04655832bcb0a9a0bE8c5AB71E4D311464c97AF5");
});

test("test EIP3770 Check incorrect address", async () => {
  // 2. Check incorrect length address
  const invalidAddress = "0x04655832bcb0a9a0bE8c5AB71E4D311464c97A";
  async function testInvalidAddress() {
    await addressToEIP3770(invalidAddress, address);
  }

  expect(testInvalidAddress).toThrow(`Invalid`);
});

test("test EIP3770 Check invalid shortName", async () => {
  // 4. Check invalid chain shortName
  async function testInvalidShortName() {
    await addressToEIP3770(invalidShortName, address);
  }
  expect(testInvalidShortName).toThrow(`Invalid`);
});

test("test EIP3770 Check valid shortName", async () => {
  // 5. Check valid chain shortName
  expect(await addressToEIP3770(shortName, address)).toBe("eth:0x04655832bcb0a9a0bE8c5AB71E4D311464c97AF5");
});
