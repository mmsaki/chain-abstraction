"use client";

import React from "react";
import { http } from "wagmi";
import {
  optimism,
  optimismSepolia,
  base,
  baseSepolia,
  mode,
  modeTestnet,
  metalL2,
  fraxtal,
  fraxtalTestnet,
} from "wagmi/chains";
import { createConfig } from "@privy-io/wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type ReactNode } from "react";
import { PrivyClientConfig, PrivyProvider } from "@privy-io/react-auth";
import { WagmiProvider } from "@privy-io/wagmi";

const queryClient = new QueryClient();

export const wagmiConfig = createConfig({
  chains: [optimism, optimismSepolia, base, baseSepolia, mode, modeTestnet, metalL2, fraxtal, fraxtalTestnet],
  transports: {
    [optimism.id]: http(),
    [optimismSepolia.id]: http(),
    [base.id]: http(),
    [baseSepolia.id]: http(),
    [mode.id]: http(),
    [modeTestnet.id]: http(),
    [metalL2.id]: http(),
    [fraxtal.id]: http(),
    [fraxtalTestnet.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof wagmiConfig;
  }
}

let AlchemyApiKey: string;
let InfuraApiKey: string;

let appID: string;
const env = process.env.NODE_ENV;
try {
  if (env === "development") {
    if (process.env.PRIVY_APP_ID) appID = process.env.PRIVY_APP_ID;
    if (process.env.AlchemyApiKey) AlchemyApiKey = process.env.AlchemyApiKey;
    if (process.env.InfuraApiKey) InfuraApiKey = process.env.InfuraApiKey;
  } else if (env === "production") {
    if (process.env.NEXT_PUBLIC_PRIVY_APP_ID) appID = process.env.NEXT_PUBLIC_PRIVY_APP_ID;
    if (process.env.NEXT_PUBLIC_AlchemyApiKey) AlchemyApiKey = process.env.NEXT_PUBLIC_AlchemyApiKey;
    if (process.env.NEXT_PUBLIC_InfuraApiKey) AlchemyApiKey = process.env.NEXT_PUBLIC_InfuraApiKey;
  }
} catch (error) {
  console.error(error);
}

export function Providers({ children }: { children: ReactNode }) {
  const privyConfig: PrivyClientConfig = {
    appearance: {
      theme: "light",
      accentColor: "#676FFF",
      logo: "/Logo.svg",
    },
    embeddedWallets: {
      createOnLogin: "all-users",
    },
  };
  return (
    <PrivyProvider appId={appID} config={privyConfig}>
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={wagmiConfig}>{children}</WagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  );
}

export default Providers;
