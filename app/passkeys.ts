/*
 * @notice: Create passkey credential
 * @return: PublicKeyCredential
 * */
export async function createCred(): Promise<PublicKeyCredential | undefined> {
  if (!window.PublicKeyCredential) alert("Passkeys not supported on this Client/Platform/Browser!");

  let publicKey = {
    challenge: new Uint8Array([0]),
    rp: { name: "chain-abstraction" },
    user: { id: new Uint8Array([0]), name: "msaki", displayName: "Meek Msaki" },
    pubKeyCredParams: [
      { type: "public-key", alg: -7 },
      { type: "public-key", alg: -257 },
    ],
    authenticatorSelection: { userVerification: "preferred" },
    timeout: 300000,
  };

  await navigator.credentials
    // @ts-ignore
    .create({ publicKey })
    .then((creds) => {
      console.log(creds);
      return creds;
    })
    .catch((err) => {
      alert("The operation either timed out or failed.");
      console.error(err);
    });
  return;
}
