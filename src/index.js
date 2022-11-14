import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { VideosProvider } from "./context/videosContext";
import {BrowserRouter } from "react-router-dom"
import { CommentProvider } from "./context/commentsContext";
import { WatchLaterProvider } from "./context/WatchLaterContext";
import { HistoryProvider } from "./context/HistoryContext";
import { LikesProvider } from "./context/LikesContext";
import { FilterProvider } from "./context/FilterContext";
import { AuthProvider } from "./context/AuthContext";



// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
    <FilterProvider>
    <LikesProvider>
    <HistoryProvider>
    <WatchLaterProvider>
    <CommentProvider >
    <VideosProvider>
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </VideosProvider>
    </CommentProvider>
    </WatchLaterProvider>
    </HistoryProvider>
    </LikesProvider>
    </FilterProvider>
    </AuthProvider>
  
  </React.StrictMode>,
  document.getElementById("root")
);
