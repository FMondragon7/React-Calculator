import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App title={"Groceries"} color={"#06b6d4"} />
  </React.StrictMode>
);
