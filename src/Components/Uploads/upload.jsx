import React from "react";
import axios from "axios";
import {providers} from 'ethers';
import lighthouse from '@lighthouse-web3/sdk';
import * as PushAPI from "@pushprotocol/restapi";

function Newupload() {

//signer to sign in 
  const sign_message = async () => {
    const provider = new providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    const res = await axios.get(`https://api.lighthouse.storage/api/auth/get_message?publicKey=${address}`);
    const message = res.data;
    const signedMessage = await signer.signMessage(message);
    return({
      message: message,
      signedMessage: signedMessage,
      address: address
    });
  };
  //FOr encryption purpose
    const encryptionSignature = async () => {
    const provider = new providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    const messageRequested = (await lighthouse.getAuthMessage(address)).data.message;
    const signedMessage = await signer.signMessage(messageRequested);
    return(signedMessage);
  };


  const deploy = async(e) =>{
    // Sign message for authentication
    const signingResponse = await sign_message();

    // Get a bearer token
    const accessToken = (await axios.post(`https://api.lighthouse.storage/api/auth/verify_signer`, {
      publicKey: signingResponse.address,
      signedMessage: signingResponse.signedMessage
    })).data.accessToken;

    const publicKey = signingResponse.address;

    // Push file to lighthouse node
    const encryptionSignaturee = await encryptionSignature();
    const response = await lighthouse.uploadEncrypted(
        e,
        publicKey,
        accessToken,
        encryptionSignaturee
      );
    console.log( response);
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

    const handleSubmission = async () => {  
    window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
        console.log("Account Connected: " + res[0]);
        });
    const provider = new  providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const apiResponse = await PushAPI.payloads.sendNotification({
        signer,
        type: 3, // target
        identityType: 2, // direct payload
        notification: {
            title: `[SDK-TEST] notification TITLE:`,
            body: `[sdk-test] notification BODY`
        },
        payload: {
            title: `[sdk-test] payload title`,
            body: `sample msg body`,
            cta: '',
            img: ''
        },
        recipients: 'eip155:5:0x0BB204417842e15F7252206E5fE0b29c83A50c3e',
        channel:'eip155:5:0x0BB204417842e15F7252206E5fE0b29c83A50c3e' ,// recipient address, // your channel address
        env: 'staging'
        });
    console.log(apiResponse);
    console.log("Selected file");
};
        

    
  

  return (
    <div className="App">
      <input onChange={e=>deploy(e)} type="file" />
    <button onClick={handleSubmission}>Click me!</button>
      
    </div>
  );
}

export default Newupload;