import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
// StrictMode is a tool for highlighting potential problems in application.
// It activates additional checks and warnings for its descedants.
// It only runs in development , not going to impact out producion build
