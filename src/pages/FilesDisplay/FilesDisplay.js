/** @format */

import React, { useEffect } from "react";
import { useAccount } from "wagmi";
import FileCard from "../../Components/FileCard";
import { getFiles } from "../../helpers/graph";
import styles from "./style.module.css";

// Service Cards To be Made
// Upload any Data to IPFS
// Upload any Data with Encryption
// Retrieve any Data from IPFS
// Retrieve any Data with Encryption

export const FilesDisplay = () => {
  const { address } = useAccount();
  useEffect(() => {
    const getUserFiles = async () => {
      const files = await getFiles(address);
      console.log(files);
    };
    getUserFiles();
  }, []);
  return (
    <>
      <div className={styles.outerContainer}>
        <FileCard />
      </div>
    </>
  );
};
