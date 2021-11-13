import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import AddImagePage from "./pages/AddImagePage/AddImagePage";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/create" element={<AddImagePage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
