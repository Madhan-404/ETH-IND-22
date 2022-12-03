/** @format */

import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "./style.module.css";
// import Logo from "assets/Storage.png";
const Navbar = () => {
  return (
    <div className={styles.nav}>
      {/* <Image src="assets/Storage.png" /> */}
      <img src="assets/Storage.png" width={44} />
      <ConnectButton />
    </div>
  );
};

export default Navbar;
