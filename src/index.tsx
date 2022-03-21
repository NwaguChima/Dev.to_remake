import React from "react";
import ReactDOM from "react-dom";
import "./Styles/index.scss";
import App from "./App";
import { ViewContextProvider } from "./context/ViewContext";

ReactDOM.render(
  <React.StrictMode>
    <ViewContextProvider>
      <App />
    </ViewContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
