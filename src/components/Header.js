import React from "react";
import "./header.scss";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitchIcon from "../assets/header/theme-switch.png";

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
      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img src={themeSwitchIcon} alt="Theme Switch"></img>
        </div>
      </div>

      <div className="loginButton">GET IN</div>
    </div>
  );
};

export default Header;
