import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // optional: include your global CSS if present
import App from "./App";

const rootEl = document.getElementById("app");
if (rootEl) {
  const root = createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
