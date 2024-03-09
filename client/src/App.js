import "./App.css";
import Accounts from "./components/Accounts";
import Transactions from "./components/Transactions";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/nav.css";

function App() {
  return (
    <div>
      <div class="navbar">
        <a class="active" href="/accounts">
          Accounts
        </a>
        <a href="/transactions">Transactions</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/transactions" element={<Transactions />} />
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
