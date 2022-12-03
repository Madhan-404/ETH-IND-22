/** @format */

import "@rainbow-me/rainbowkit/dist/index.css";
import FilesDisplay from "./pages/FilesDisplay";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import styles from "./styles.module.css";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import { addUser } from "./web3/user/AddUser";
import { checkUserExists } from "./web3/user/CheckUser";
export default function App() {
  const { isConnected, address } = useAccount();
  useEffect(() => {
    const checkNew = async () => {
      const userExists = await checkUserExists(address);
      // console.log(userExists);
      if (!userExists) {
        await addUser(address);
      }
    };
    checkNew();
  }, [isConnected]);
  return (
    <div className={styles.App}>
      <Navbar />
      {isConnected ? <FilesDisplay /> : <Home />}
      <Footer />
    </div>
  );
}
