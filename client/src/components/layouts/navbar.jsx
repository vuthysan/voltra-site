import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <React.Fragment>
      <div className="ui secondary stackable menu navbar-background">
        <div className="item">
          <Link to="/">
            <img src="image/voltra_logo.png" alt="" className="logoImage" />
          </Link>
        </div>
        <div className="right menu a-navbar">
          <Link to="/our-story" className="item">
            Our Story
          </Link>
          <Link to="/model" className="item">
            Model
          </Link>
          <Link to="/faq" className="item">
            FAQ
          </Link>
          <Link to="/contact-us" className="item">
            Contact us
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
