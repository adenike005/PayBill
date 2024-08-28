import React from "react";
import "./App.css";
import Login from "./Component/Login";
import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Signup from "./Component/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
