import App from "./App";
import React from "react";
import { render } from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
const container = document.getElementById("root");
const root = createRoot(container);
// import { DarkModeContextProvider } from './context/darkModeContext'

root.render(
    <React.StrictMode>
        {/* <DarkModeContextProvider> */}
        <App />
        {/* </DarkModeContextProvider> */}
    </React.StrictMode>
    // document.getElementById('root')
);
