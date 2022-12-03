import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
import styles from "./style.module.css";
// import Upload from "../FileCard/upload";

// A image on left and Content on right with connect in bottom
// On successfull connect redirect to /files page
const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="assets/Saly-1 (1).png" className={styles.image} />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.heading}>
          Sharing files is now Interplanetory
        </div>
        <div className={styles.content}>
          With StoroCrypt you can share your data anywhere. StoroCrypt provides
          restricted content sharing features so you can be extra safe with your
          data. It's fast, secure and encrypted!!
        </div>
        <ConnectButton />
       
      </div>
    </div>
  );
};

export default Hero;
