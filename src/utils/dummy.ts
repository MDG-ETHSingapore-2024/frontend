import { Project } from "./types"; // Assuming the Project type is in a separate file

export const dummyProjects: Project[] = [
  {
    id: "1",
    name: "EtherSwap",
    chain: "Ethereum",
    chainId: 1,
  },
  {
    id: "2",
    name: "BinanceChainLink",
    chain: "Binance Smart Chain",
    chainId: 56,
  },
  {
    id: "3",
    name: "PolkadotConnect",
    chain: "Polkadot",
    chainId: 0, // Polkadot doesn't use chainId in the same way
  },
  {
    id: "4",
    name: "CardanoNFTMarket",
    chain: "Cardano",
    // chainId omitted as Cardano doesn't use EVM-compatible chain IDs
  },
  {
    id: "5",
    name: "SolanaSwift",
    chain: "Solana",
    // chainId omitted as Solana doesn't use EVM-compatible chain IDs
  },
  {
    id: "6",
    name: "AvalancheRush",
    chain: "Avalanche",
    chainId: 43114,
  },
  {
    id: "7",
    name: "FantomOpera",
    chain: "Fantom",
    chainId: 250,
  },
  {
    id: "8",
    name: "TerraLuna",
    chain: "Terra",
    // chainId omitted as Terra doesn't use EVM-compatible chain IDs
  },
  {
    id: "9",
    name: "PolygonMatic",
    chain: "Polygon",
    chainId: 137,
  },
  {
    id: "10",
    name: "AlgorandGovernance",
    chain: "Algorand",
    // chainId omitted as Algorand doesn't use EVM-compatible chain IDs
  },
  {
    id: "11",
    name: "TezosXTZ",
    chain: "Tezos",
    // chainId omitted as Tezos doesn't use EVM-compatible chain IDs
  },
  {
    id: "12",
    name: "CosmosAtom",
    chain: "Cosmos",
    // chainId omitted as Cosmos doesn't use EVM-compatible chain IDs
  },
];
