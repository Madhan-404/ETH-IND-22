/** @format */

import React, { useEffect } from "react";
import { useAccount } from "wagmi";
import { getFileUrl } from "../../helpers/lightHouseStorage";
import styles from "./style.module.css";

// import will take event handler function accordiing to different services under 'handlers folder'

export const FileCard = ({ name, cid }) => {
  const [url, setUrl] = useState("");
  const { address } = useAccount();
  useEffect(() => {
    getFileUrl(cid, address).then((url) => {
      setUrl(url);
    });
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>{name}</h1>
      </div>
      <div className={styles.two_buttons}>
        <a href={url} download>
          <button className={styles.button}>
            <img src="assets/download.png" height={20} width={20} alt="" />
          </button>
        </a>
      </div>
    </div>
  );
};
