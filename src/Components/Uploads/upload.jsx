/** @format */

// import React from "react";

// import * as PushAPI from "@pushprotocol/restapi";
import styles from "./style.module.css";
import React, { useState } from "react";
function Newupload({ onOpen }) {
  return (
    <>
      <button onClick={onOpen} className={styles.uploadBtn}>
        Upload
      </button>
    </>
  );
}

export default Newupload;
