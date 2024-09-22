import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "./components/ui/sonner.tsx";
import { ReduxProvider } from "./utils/redux/provider.tsx";
import { WalletWagmiProvider } from "./utils/config/WalletWagmiProvider.tsx";
import Router from "./utils/config/Router.tsx";
import "./global.css";
import { ThemeProvider } from "./utils/config/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <ReduxProvider>
        <WalletWagmiProvider>
          <Router />
        </WalletWagmiProvider>
        <Toaster />
      </ReduxProvider>
    </ThemeProvider>
  </StrictMode>
);
