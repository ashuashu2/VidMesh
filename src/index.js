import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { VideosProvider } from "./context/videosContext";
import {BrowserRouter } from "react-router-dom"



// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <VideosProvider>
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </VideosProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
