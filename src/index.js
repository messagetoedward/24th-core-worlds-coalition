import React from "react";
import ReactDOM from "react-dom";
import { App } from "./Components/App/App";
import { ThemeProvider } from "@emotion/react";
import "../src/index.css";
import { theme } from "./Components/Constants/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
