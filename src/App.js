/** @format */

import "@rainbow-me/rainbowkit/dist/index.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { BrowserRouter, Routes, Route, useNavigation } from "react-router-dom";
import FilesDisplay from "./pages/FilesDisplay";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import Web3 from "web3";

export default function App() {
  const [isConnected, setIsConnected] = useState(false);
  useEffect(() => {
    const checkConnection = async () => {
      let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
      const accounts = await web3.eth.getAccounts();
      if (!accounts.length) {
        setIsConnected(false);
      } else {
        setIsConnected(true);
      }
    };
    checkConnection();
    console.log("isConnected = ", isConnected);
  }, []);
  const { chains, provider } = configureChains(
    [
      chain.mainnet,
      chain.polygon,
      chain.goerli,
      chain.polygonMumbai,
      // chain.hardhat,
    ],
    [alchemyProvider({ apiKey: process.env.REACT_APP_ALCHEMY_ID })]
  );

  const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme()}>
        <div className={styles.App}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              {!isConnected ? (
                <Route path="/" element={<Home />} />
              ) : (
                <Route path="/files" element={<FilesDisplay />} />
              )}
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
