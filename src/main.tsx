import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/app.tsx";

createRoot(document.getElementById("root") ?? new Element()).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
