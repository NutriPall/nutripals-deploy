import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
    <div className="sign-off">
    <h3 id="sign-off-text">Your one stop to nutritious meals</h3>
    </div>
    <div className="sign-off-image">
    <img className="sign-off-image" src="https://i.imgur.com/T6JjGfR.png" alt="icon with food and a heart" title="we love food" />
    </div>
    <div className="footer-links">
      <p><Link to="/">Home</Link></p>
      <p><Link to="/contact-us">Contact Us</Link></p>
      <p><Link to="/recipes-list">Recipe List</Link></p>
      <p><Link to="/about-us">About Us</Link></p>
    </div>
    </footer>
  );
}
