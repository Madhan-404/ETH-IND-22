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
  const files = [
    { name: "Wedding.png", url: "https://ipfs.io/ipfs/QmZ2Y1" },
    { name: "Convocation.png", url: "https://ipfs.io/ipfs/QmZ2Y1" },
    { name: "Blockchain_notes.txt", url: "https://ipfs.io/ipfs/QmZ2Y1" },
    { name: "ETHIndia_invite.txt", url: "https://ipfs.io/ipfs/QmZ2Y1" },
    { name: "Birthday.png", url: "https://ipfs.io/ipfs/QmZ2Y1" },
    { name: "Letter.pdf", url: "https://ipfs.io/ipfs/QmZ2Y1" },
  ];
  return (
    <>
      <div className={styles.outerContainer}>
        {files.map((file) => (
          <FileCard key={file.name} name={file.name} url={file.url} />
        ))}
      </div>
    </>
  );
};
