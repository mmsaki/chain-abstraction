import { parseQuery } from "./utils";

test("parse Query correctly", () => {
  // USDT address
  let query = "metall2:0xdAC17F958D2ee523a2206206994597C13D831ec7";
  expect(parseQuery(query)).toEqual({ operator: "metall2", query: "0xdAC17F958D2ee523a2206206994597C13D831ec7" });
});
