/**
 * Parse an ERC3770 query and returns an object
 *
 * @param query - a ERC3770 string ex. "metall2:0xdAC17F958D2ee523a2206206994597C13D831ec7";
 * @returns {operator: "", query: ""}
 */
export function parseQuery(query: string) {
  // 1. remove white spaces
  query = query.trim();

  // 2. regex pattern
  let re = /(\S+):([\S]+)/;
  let arr = query.match(re);

  if (arr?.length == 3) {
    return {
      operator: arr[1],
      query: arr[2],
    };
  } else {
    return {};
  }
}
