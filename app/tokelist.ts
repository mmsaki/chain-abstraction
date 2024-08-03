"use server";

import { Octokit } from "@octokit/core";

/**
 * GET requet Superchain Token List
 * @notice: Reference for API https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28
 *
 * We want the list of tokens available in the Superchain Token list
 * @param: {string} owner = "ethereum-optimism";
 * @param: {string} repo  = "ethereum-optimism.github.io";
 * @param: {string} path  = "data";
 *
 * @return list of unified token list for OP Mainnet, Base, and other OP Chains
 *
 */
export async function getTokenList(owner: string, repo: string, path: string) {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN, // set GITHIB_TOKEN in env.local
  });

  const res = await octokit.request(`GET /repos/${owner}/${repo}/contents/${path}`, {
    owner: "OWNER",
    repo: "REPO",
    path: "PATH",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  const tokenList = JSON.stringify(
    res.data.map((el: any) => {
      return el["name"];
    })
  );
  return tokenList;
}

/**
 * GET request Github endpoint
 * @notice: Read content of file of github file
 *
 * @param: {string} tokenName from OP Chain token list
 *
 * @return: tokenData see https://static.optimism.io/#adding-a-token-to-the-list
 *          {"name": string, "symbol": string, "tokens": {"base": "0xB45E...", "optimism": "0xED32..."}}
 */
export async function getTokenData(tokenName: string) {
  let owner = "ethereum-optimism";
  let repo = "ethereum-optimism.github.io";
  let path = "data";
  const tokenList = await getTokenList(owner, repo, path);

  if (!tokenList.includes(tokenName)) throw new Error(`${tokenName} not found in OP Chain list`);

  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const tokenData = await octokit.request(`GET /repos/${owner}/${repo}/contents/${path}/${tokenName}`, {
    owner: "OWNER",
    repo: "REPO",
    path: "PATH",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  return tokenData;
}
