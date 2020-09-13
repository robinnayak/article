import React from "react";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Add from "./component/pages.jsx/Add";

function Navbar() {
  return (
    <nav className="header">
      <Link to="/">
        <HomeRoundedIcon fontSize="large" className="header__homeIcon" />
      </Link>
      <div className="add__button">
        <Link to="/Add" className="btn btn-outline-success btn-sm">
          Add Article
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
