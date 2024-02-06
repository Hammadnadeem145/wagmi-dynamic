// import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { config } from "@/wagmi";
import { WagmiConfig } from "wagmi";


import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";

import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { SolanaWalletConnectors } from "@dynamic-labs/solana";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";


export default function App({ Component, pageProps }: AppProps) {
  return (


    <DynamicContextProvider
      settings={{
        // Find your environment id at https://app.dynamic.xyz/dashboard/developer
        environmentId: "8d23b0b8-ed43-4265-afaf-d72be5d2af0b",
        walletConnectors: [
          EthereumWalletConnectors,
          SolanaWalletConnectors
        ],
      }}
    >
      <DynamicWagmiConnector>
        <Component {...pageProps} />

      </DynamicWagmiConnector>
    </DynamicContextProvider>
  )
}
