/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { infuraProvider } from "wagmi/providers/infura";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

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
const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPH_API,
  cache: new InMemoryCache(),
});
root.render(
  <StrictMode>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme()}>
        <ChakraProvider>
          <ApolloProvider client={client}>
            <App />
          </ApolloProvider>
        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  </StrictMode>
);
