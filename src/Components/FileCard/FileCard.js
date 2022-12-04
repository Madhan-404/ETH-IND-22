/** @format */

import React from "react";
import styles from "./style.module.css";

// import will take event handler function accordiing to different services under 'handlers folder'

export const FileCard = ({ name, fileType, url }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>{name}</h1>
        <p>
          <div>File type </div>
          {fileType}  
        </p>
      </div>
      <div className={styles.two_buttons}>
      <a href={url} download>
        <button className={styles.button}>Download</button>
      </a>
      <a href={url} share>
        <button className={styles.button}>Share</button>
      </a>
      </div>
    </div>
  );
};
