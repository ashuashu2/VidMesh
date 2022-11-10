import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { VideosProvider } from "./context/videosContext";
import {BrowserRouter } from "react-router-dom"
import { CommentProvider } from "./context/commentsContext";



// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <CommentProvider >
    <VideosProvider>
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </VideosProvider>
    </CommentProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
