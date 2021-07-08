import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./css/bootstrap-grid.min.css";
import "./css/bootstrap-reboot.min.css";

import {App} from "./App";

import { Store } from "./contexts/global_context";
import { ComponentStore } from "./contexts/component_context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Store>
        <ComponentStore>
          <App />
        </ComponentStore>
      </Store>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
