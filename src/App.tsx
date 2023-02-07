import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./app.scss";
import LeftBar from "./components/NavBar/LeftBar/LeftBar";
import CenterBar from "./components/NavBar/CenterBar/CenterBar";
import RightBar from "./components/NavBar/RightBar/RightBar";
import PageRender from "./customRouters/PageRender";

import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      {/* <div className="app">
        <div className="left">
          <LeftBar />
        </div>
        <div className="center">
          <CenterBar />
        </div>

        <div className="right">
          <RightBar />
        </div>
      </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />

        <Route path="/:page" element={<PageRender />} />
        <Route path="/:page/:id" element={<PageRender />} />
      </Routes>
    </Router>
  );
}

export default App;
