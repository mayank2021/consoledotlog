import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import UserDataContextProvider from "./Context/UserDataContext";

ReactDOM.render(
  <UserDataContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserDataContextProvider>,

  document.getElementById("root")
);
