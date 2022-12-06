/** @format */
import axios from "axios";
import { providers } from "ethers";
import lighthouse from "@lighthouse-web3/sdk";
import { AddFile } from "../web3/File/AddFile";
// signer to sign in
export const sign_message = async() => {
  const provider = new providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const address = await signer.getAddress();
  const res = await axios.get(
    `https://api.lighthouse.storage/api/auth/get_message?publicKey=${address}`
  );
  const message = res.data;
  const signedMessage = await signer.signMessage(message);
  return {
    message: message,
    signedMessage: signedMessage,
    address: address,
  };
};
//For encryption purpose
export const encryptionSignature = async() => {
  const provider = new providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const address = await signer.getAddress();
  const messageRequested = (await lighthouse.getAuthMessage(address)).data
    .message;
  const signedMessage = await signer.signMessage(messageRequested);
  return signedMessage;
};

export const deployEncrypted = async(e) => {
  // Sign message for authentication
  const signingResponse = await sign_message();

  // Get a bearer token
  const accessToken = (
    await axios.post(`https://api.lighthouse.storage/api/auth/verify_signer`, {
      publicKey: signingResponse.address,
      signedMessage: signingResponse.signedMessage,
    })
  ).data.accessToken;

  const publicKey = signingResponse.address;

  // Push file to lighthouse node
  const encryptionSignaturee = await encryptionSignature();
  const response = await lighthouse.uploadEncrypted(
    e,
    publicKey,
    accessToken,
    encryptionSignaturee
  );
  console.log(response);
  const { Name, Hash, Size } = response.data;
  const fileType = Name.split(".").pop();
  AddFile(fileType, Hash, Name, signingResponse.address);
  /*
      output:
        {
          Name: "filename.txt",
          Size: 88000,
          Hash: "QmWNmn2gr4ZihNPqaC5oTeePsHvFtkWNpjY3cD6Fd5am1w"
        }
      Note: Hash in response is CID.
    */

  //   console.log('Visit at https://ipfs.io/ipfs/' + output.data.Hash);
};
const sign_auth_message = async() => {
  const provider = new providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const publicKey = (await signer.getAddress()).toLowerCase();
  const messageRequested = (await lighthouse.getAuthMessage(publicKey)).data
    .message;
  const signed_message = await signer.signMessage(messageRequested);
  return signed_message;
};
export const getFileUrl = async(cid, publicKey) => {
  const signed_message = await sign_auth_message();

  /*
      fetchEncryptionKey(cid, publicKey, signedMessage)
        Parameters:
          CID: CID of file to decrypt
          publicKey: public key of user who has access of file or owner
          signedMessage: message signed by owner of publicKey
    */
  const keyObject = await lighthouse.fetchEncryptionKey(
    cid,
    publicKey,
    signed_message
  );

  // Decrypt file
  /*
      decryptFile(cid, key, mimeType)
        Parameters:
          CID: CID of file to decrypt
          key: key to decrypt file
          mimeType: default null, mime type of file
    */

  const decrypted = await lighthouse.decryptFile(cid, keyObject.data.key);
  console.log(decrypted);
  var urlCreator = window.URL || window.webkitURL;
  var imageUrl = urlCreator.createObjectURL(decrypted.blob);
  return imageUrl;
  /*
      Response: blob
    */
};