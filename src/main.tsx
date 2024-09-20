import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Toaster } from "./components/ui/sonner.tsx";
import { ReduxProvider } from "./utils/redux/provider.tsx";
import { WalletWagmiProvider } from "./utils/config/WalletWagmiProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider>
      <WalletWagmiProvider>
        <App />
      </WalletWagmiProvider>
      <Toaster />
    </ReduxProvider>
  </StrictMode>
);
