"use client";

import { extractPasskeyData, PasskeyArgType } from "@safe-global/protocol-kit";
import { STORAGE_PASSKEY_LIST_KEY } from "./lib/constants";

/*
 * @notice: Create passkey credential
 * @return: PublicKeyCredential
 * */
export async function createPasskey(
  rpName: string,
  userDisplayName: string,
  userName: string
): Promise<PasskeyArgType> {
  if (!window.PublicKeyCredential) alert("Passkeys not supported on this Client/Platform/Browser!");

  let publicKey = {
    pubKeyCredParams: [
      {
        alg: -7,
        type: "public-key",
      },
    ],
    challenge: crypto.getRandomValues(new Uint8Array(32)),
    rp: {
      name: rpName,
    },
    user: {
      displayName: userDisplayName,
      id: crypto.getRandomValues(new Uint8Array(32)),
      name: userName,
    },
    timeout: 60_000,
    attestation: "none",
  };

  // @ts-ignore
  const passkeyCredential = await navigator.credentials.create({ publicKey });
  if (!passkeyCredential) {
    throw Error("Passkey creation failed: No credential was returned.");
  }

  const passkey = await extractPasskeyData(passkeyCredential);
  storePasskeyInLocalStorage(passkey);
  console.log("Created Passkey: ", passkey);

  return passkey;
}

/**
 * Store passkey in local storage.
 * @param {PasskeyArgType} passkey - Passkey object with rawId and coordinates.
 */
export function storePasskeyInLocalStorage(passkey: PasskeyArgType) {
  const passkeys = loadPasskeysFromLocalStorage();
  passkeys.push(passkey);
  localStorage.setItem(STORAGE_PASSKEY_LIST_KEY, JSON.stringify(passkeys));
}

/**
 * Load passkeys from local storage.
 * @returns {PasskeyArgType[]} List of passkeys.
 */
export function loadPasskeysFromLocalStorage(): PasskeyArgType[] {
  const passkeysStored = localStorage.getItem(STORAGE_PASSKEY_LIST_KEY);
  const passkeyIds = passkeysStored ? JSON.parse(passkeysStored) : [];
  return passkeyIds;
}

/**
 * Get passkey object from local storage.
 * @param {string} passkeyRawId - Raw ID of the passkey.
 * @returns {PasskeyArgType} Passkey object.
 */
export function getPasskeyFromRawId(passkeyRawId: string): PasskeyArgType {
  const passkeys = loadPasskeysFromLocalStorage();

  const passkey = passkeys.find((passkey) => passkey.rawId === passkeyRawId)!;

  return passkey;
}
