import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router} from 'react-router-dom';
import { AuthProvider, CartProvider, FilterProvider} from "./context";
import {createRoot} from "react-dom/client";
// Call make Server
makeServer();

// 
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <CartProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </CartProvider>
        </AuthProvider>
    </Router>
  </React.StrictMode>
);
