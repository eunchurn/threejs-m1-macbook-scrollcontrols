import React from "react";
import ReactDOM from "react-dom/client";
import { Suspense } from "react";
import App from "./App";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </React.StrictMode>
);
