import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RootStore } from "./stores/root-store.ts";

const rootStore = new RootStore();
console.log("🚀 ~ rootStore:", rootStore);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
