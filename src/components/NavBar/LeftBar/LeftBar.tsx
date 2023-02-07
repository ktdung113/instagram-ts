import React from "react";
import "./LeftBar.scss";
import { Link } from "react-router-dom";

import { BsInstagram, BsSearch } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineHeart, AiOutlinePlusCircle } from "react-icons/ai";
import { MdOutlineExplore, MdOutlineMore } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
function LeftBar() {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="item logo" title="Home">
          <Link to="/">
            <BsInstagram className="icon" />
          </Link>
        </div>
        <div className="item" title="Search">
          <BsSearch className="icon" />
        </div>
        <div className="item" title="Xxplore">
          <Link to="/explore">
            <MdOutlineExplore className="icon" />
          </Link>
        </div>
        <div className="item" title="Message">
          <Link to="/message">
            <RiMessengerLine className="icon" />
          </Link>
        </div>
        <div className="item" title="Notifies">
          <AiOutlineHeart className="icon" />
        </div>
        <div className="item" title="New post">
          <AiOutlinePlusCircle className="icon" />
        </div>
        <div className="item" title="Profile">
          <Link to="/profile">
            <FaUserCircle className="icon" />
          </Link>
        </div>
        <div className="item" title="More">
          <MdOutlineMore className="icon" />
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
