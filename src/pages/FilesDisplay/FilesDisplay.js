/** @format */

import React, { useEffect } from "react";
import { useAccount, useQuery } from "wagmi";
import FileCard from "../../Components/FileCard";
import { getFilesQuery } from "../../helpers/graph";
import styles from "./style.module.css";

// Service Cards To be Made
// Upload any Data to IPFS
// Upload any Data with Encryption
// Retrieve any Data from IPFS
// Retrieve any Data with Encryption

export const FilesDisplay = () => {
  const { address } = useAccount();
  const { data, loading, error } = useQuery(getFilesQuery(address));
  return (
    <>
      <div className={styles.outerContainer}>
        {data.files.map((file) => (
          <FileCard key={file.name} name={file.name} url={file.url} />
        ))}
      </div>
    </>
  );
};
