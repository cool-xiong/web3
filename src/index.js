import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/html";
import { configureChains, createConfig } from "@wagmi/core";
import { bsc, arbitrum, mainnet, polygon } from "@wagmi/core/chains";

const chains = [bsc, mainnet, polygon, arbitrum];
const projectId = "d0bb741c5730b3662a6c64e672467c1f";

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);
const web3modal = new Web3Modal({ projectId }, ethereumClient);
console.log(web3modal);
console.log(ethereumClient.getNetwork());
console.log(ethereumClient.getAccount());
