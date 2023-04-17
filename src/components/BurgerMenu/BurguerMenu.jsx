import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./BurgerMenu.css"

export default function BurgerMenu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="navbar navbar-expand-md">
        <img
        className="nav-item"
        id="logo"
        src="https://i.imgur.com/a5Yd99l.png"
        title="our logo"
        alt="a drawing of a dish with a knife and a fork"
      />
      <h3 className="brand-name">NutriPals</h3>
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setShowMenu(!showMenu)}
        aria-label="Toggle navigation"
      > 
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${showMenu ? "show" : ""}`} id="navbarTogglerDemo01"> 
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
          <Link className="nav-link" to="/">
            Homepage
          </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/about-us">
            About Us
          </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/recipes-list">
            Recipe List
          </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/contact-us">
            Contact Us
          </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/sign-up">
            Sign Up
          </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
