import React from "react";
import "../styles/home.scss";
import LeftBar from "../components/NavBar/LeftBar/LeftBar";
import RightBar from "../components/NavBar/RightBar/RightBar";
import CenterBar from "./../components/NavBar/CenterBar/CenterBar";

const Home = () => {
  return (
    <div className="home">
      <div className="left">
        <LeftBar />
      </div>
      <div className="center">
        <CenterBar />
      </div>
      <div className="right">
        <RightBar />
      </div>
    </div>
  );
};

export default Home;
