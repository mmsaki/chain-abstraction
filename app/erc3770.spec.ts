import { parseERC3770String, toValidERC3770String } from "./erc3770";

const address = "0x04655832bcb0a9a0bE8c5AB71E4D311464c97AF5";
const shortName = "eth";
const invalidShortName = "fakeChain0";

test("test ERC3770 Check invalid checksum address", async () => {
  // 1. Check invalid checksum address
  const nonChecksumAddress = "0x04655832bcb0a9a0bE8c5AB71E4D311464c97Af5";
  expect(await toValidERC3770String(shortName, nonChecksumAddress)).toBe(
    "eth:0x04655832bcb0a9a0bE8c5AB71E4D311464c97AF5"
  );
});

test("test ERC3770 Check correct checksum address", async () => {
  // 2. Check correct checksum address
  const validAddress = "0x04655832bcb0a9a0bE8c5AB71E4D311464c97AF5";
  expect(await toValidERC3770String(shortName, validAddress)).toBe("eth:0x04655832bcb0a9a0bE8c5AB71E4D311464c97AF5");
});

test("test ERC3770 Check incorrect address", async () => {
  // 2. Check incorrect length address
  const invalidAddress = "0x04655832bcb0a9a0bE8c5AB71E4D311464c97A";
  async function testInvalidAddress() {
    await toValidERC3770String(invalidAddress, address);
  }

  expect(testInvalidAddress).toThrow(`Invalid`);
});

test("test ERC3770 Check invalid shortName", async () => {
  // 4. Check invalid chain shortName
  async function testInvalidShortName() {
    await toValidERC3770String(invalidShortName, address);
  }
  expect(testInvalidShortName).toThrow(`Invalid`);
});

test("test ERC3770 Check valid shortName", async () => {
  // 5. Check valid chain shortName
  expect(await toValidERC3770String(shortName, address)).toBe("eth:0x04655832bcb0a9a0bE8c5AB71E4D311464c97AF5");
});

test("test parse ERC3770 string to objct", () => {
  let str = "eth:0x04655832bcb0a9a0bE8c5AB71E4D311464c97AF5";
  expect(parseERC3770String(str)).toEqual({ shortName: "eth", address: "0x04655832bcb0a9a0bE8c5AB71E4D311464c97AF5" });
});
