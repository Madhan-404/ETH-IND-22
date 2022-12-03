/** @format */

import React from "react";
import styles from "./style.module.css";

// import will take event handler function accordiing to different services under 'handlers folder'

export const FileCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <img width={32} src="assets/Storage.png" />
        <div>Upload Data</div>
      </div>
      <div className={styles.content}>
        Upload any data in IPFS. Your data will be visible to everyone.
      </div>
      <button className={styles.button}>Upload</button>
    </div>
  );
};
