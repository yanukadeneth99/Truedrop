import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark">
      <ThirdwebProvider
        desiredChainId={ChainId.Mumbai}
        dAppMeta={{
          name: "Truedrop",
          description: "Initialiser for Souldrop tokens",
          isDarkMode: false,
        }}
        supportedChains={[ChainId.Mumbai, ChainId.Goerli]}
      >
        <Component {...pageProps} />
      </ThirdwebProvider>
    </ThemeProvider>
  );
}

export default MyApp;
