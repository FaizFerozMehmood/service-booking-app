import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import { getDATA } from "./assets/HandleJsonData";

function App() {
  console.log(getDATA())
  return (
    <>
      <Navbar />
      <div >
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
