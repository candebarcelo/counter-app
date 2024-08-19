import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CounterApp } from "./CounterApp.jsx";
import "./index.css";
import { FirstApp } from "./FirstApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <FirstApp title="hola" /> */}
    <CounterApp value={60}></CounterApp>
  </StrictMode>
);
