import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Collapse } from "bootstrap";
import "./styles.css";
import App from "./App.jsx";

window.bootstrap = { Collapse };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
