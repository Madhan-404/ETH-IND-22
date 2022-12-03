/** @format */

import "@rainbow-me/rainbowkit/dist/index.css";
import FilesDisplay from "./pages/FilesDisplay";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import styles from "./styles.module.css";
import { useAccount } from "wagmi";
export default function App() {
  const { isConnected } = useAccount();
  return (
    <div className={styles.App}>
      <Navbar />
      {isConnected ? <FilesDisplay /> : <Home />}
      <Footer />
    </div>
  );
}
