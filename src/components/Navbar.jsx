import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <img
        className="nav-item"
        id="logo"
        src="https://i.imgur.com/a5Yd99l.png"
        title="our logo"
        alt="a drawing of a dish with a knife and a fork"
      />
      <ul className="navbar-list">
        <li className="nav-item">
          <Link to="/" className="menu-item">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about-us" className="menu-item">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/recipes-list" className="menu-item">
            Recipes
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact-us" className="menu-item">
            Contact Us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/sign-up" className="menu-item">
            Sign Up
          </Link>
        </li>
      </ul>
    </div>
  );
}
