import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "./components/ui/sonner.tsx";
import { ReduxProvider } from "./utils/redux/provider.tsx";
import { WalletWagmiProvider } from "./utils/config/WalletWagmiProvider.tsx";
import Router from "./utils/config/Router.tsx";
import "./global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider>
      <WalletWagmiProvider>
        <Router />
      </WalletWagmiProvider>
      <Toaster />
    </ReduxProvider>
  </StrictMode>
);
