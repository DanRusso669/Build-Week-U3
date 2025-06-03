import React from "react";
import { Routes, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Home from "./components/Home";
import Rete from "./components/Rete";
import Lavoro from "./components/Lavoro";
import Messaggistica from "./components/Messaggistica";
import Notifiche from "./components/Notifiche";
import Profilo from "./components/Profilo";
import "./App.css";

function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rete" element={<Rete />} />
        <Route path="/lavoro" element={<Lavoro />} />
        <Route path="/messaggistica" element={<Messaggistica />} />
        <Route path="/notifiche" element={<Notifiche />} />
        <Route path="/tu" element={<Profilo />} />
      </Routes>
    </>
  );
}

export default App;
