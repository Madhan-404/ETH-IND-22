import "@rainbow-me/rainbowkit/dist/index.css";
import { getDefaultWallets, RainbowKitProvider,darkTheme } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { YourComponent } from "./Components/YourComponent";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon,chain.goerli, chain.polygonMumbai,chain.hardhat],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

export default function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme()}>
        <YourComponent />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
