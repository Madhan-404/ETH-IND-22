/** @format */

// import React from "react";

// import * as PushAPI from "@pushprotocol/restapi";
import styles from "./style.module.css";
import React, { useState } from "react";
function Newupload({ onOpen }) {
  const [img, setImg] = React.useState(null);
  const [cid, setCid] = React.useState(null);

  // const handleSubmission = async () => {
  //   window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
  //     console.log("Account Connected: " + res[0]);
  //   });
  //   const provider = new providers.Web3Provider(window.ethereum);
  //   const signer = provider.getSigner();
  //   const apiResponse = await PushAPI.payloads.sendNotification({
  //     signer,
  //     type: 3, // target
  //     identityType: 2, // direct payload
  //     notification: {
  //       title: `[SDK-TEST] notification TITLE:`,
  //       body: `[sdk-test] notification BODY`,
  //     },
  //     payload: {
  //       title: `[sdk-test] payload title`,
  //       body: `sample msg body`,
  //       cta: "",
  //       img: "",
  //     },
  //     recipients: "eip155:5:0x0BB204417842e15F7252206E5fE0b29c83A50c3e",
  //     channel: "eip155:5:0x0BB204417842e15F7252206E5fE0b29c83A50c3e", // recipient address, // your channel address
  //     env: "staging",
  //   });
  //   console.log(apiResponse);
  //   console.log("Selected file");
  // };

  return (
    <>
      {/* <input onChange={(e) => deploy(e)} type="file" /> */}
      <button onClick={onOpen} className={styles.uploadBtn}>
        Upload
      </button>
    </>
  );
}

export default Newupload;
