import logo from './logo.svg';
import './App.css';
import MyComponent from './components/firstComponent';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from './components/AuthPage';

function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyComponent />} />
        <Route path="/about" element={<h1>About Page</h1>} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;