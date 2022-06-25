import React from "react";
import "./header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="punkLogo" src={punkLogo} alt="Logo" />
      </div>
      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} alt="Search Icon" className="" />
        </div>
        <input
          type="text"
          className="searchInput"
          placeholder="Colllection, item, or user..."
        />
      </div>
    </div>
  );
};

export default Header;
