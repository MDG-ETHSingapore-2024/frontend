import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Toaster } from "./components/ui/sonner.tsx";
import { ReduxProvider } from "./redux/provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider>
      <App />
      <Toaster />
    </ReduxProvider>
  </StrictMode>
);
