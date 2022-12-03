/** @format */

import React from "react";
import FileCard from "../../Components/FileCard";
import styles from "./style.module.css";

// Service Cards To be Made
// Upload any Data to IPFS
// Upload any Data with Encryption
// Retrieve any Data from IPFS
// Retrieve any Data with Encryption

export const FilesDisplay = () => {
  return (
    <>
      <div className={styles.outerContainer}>
        <FileCard />
        <FileCard />
        <FileCard />
        <FileCard />
      </div>
    </>
  );
};
