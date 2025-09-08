import React from "react";
import "./style.scss";
import Button from "../../common/customButton/index";

const Header: React.FC = () => (
  <header className="header">
    <div className="header__left">
      <span className="header__logo">(LOGO)</span>
      <span className="header__contact">+12 *** *** *89</span>
    </div>
    <nav className="header__nav">
      <ul>
        <li>
          Home <span className="dropdown">&#9662;</span>
        </li>
        <li>
          Listings <span className="dropdown">&#9662;</span>
        </li>
        <li>
          Blog <span className="dropdown">&#9662;</span>
        </li>
        <li>
          Pages <span className="dropdown">&#9662;</span>
        </li>
        <li>About</li>
        <li>Contact</li>
        <li>Sign in</li>
      </ul>
    </nav>
    <div className="header__right">
      <Button text="Submit Listing" variant="outlined" />
    </div>
  </header>
);

export default Header;
