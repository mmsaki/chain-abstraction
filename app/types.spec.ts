import { validateERC3770 } from "./types";

test("is correct ERC3770 type", () => {
  const input = "eth:0x1AB4973a48dc892Cd9971ECE8e01DcC7688f8F23";
  expect(validateERC3770(input)).toBeTruthy();
});

test("is invalid ERC3770 type", () => {
  const input = "eth: 0x1AB4973a48dc892Cd9971ECE8e01DcC7688f8F23";
  expect(validateERC3770(input)).toBeFalsy();
});
