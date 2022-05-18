import React from "react";
import "./nav.style.css";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <>
      <div className="navbar">
        <div className="nav-left">
          <p>{props.titlename}</p>
        </div>
        <div className="nav-right">
          <a href="/">Home</a>
          <a href="/about">AboutUs</a>

          <input className="search" type="text" placeholder="search" />
        </div>
      </div>
    </>
  );
};

export default Nav;
