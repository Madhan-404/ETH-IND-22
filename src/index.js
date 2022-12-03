/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const { chains, provider } = configureChains(
  [
    chain.mainnet,
    chain.polygon,
    chain.goerli,
    chain.polygonMumbai,
    // chain.hardhat,
  ],
  [
    infuraProvider({
      apiKey: process.env.REACT_APP_INFURA_APIKEY,
      priority: 0,
    }),
    // publicProvider({ priority: 1 }),
  ]
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
root.render(
  <StrictMode>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme()}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </StrictMode>
);
