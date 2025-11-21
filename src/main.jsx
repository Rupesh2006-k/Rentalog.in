/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter.jsx";
import { Provider } from "react-redux";
import {Store} from "./store/Store.jsx";
createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <AppRouter />
  </Provider>,
);
