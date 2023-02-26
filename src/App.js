import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import User from "./pages/User";
import { LogIn } from "./pages/LogIn";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
