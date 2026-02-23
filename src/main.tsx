import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./App.css";
import "./styles/global.css";
import "./styles/layout.css";
import "./styles/sidebar.css";
import "./styles/toolbar.css";
import "./styles/question-panel.css";
import "./styles/techlead.css";
import "./styles/bottom-controls.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
