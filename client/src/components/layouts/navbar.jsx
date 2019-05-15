import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <React.Fragment>
      <div className="ui secondary stackable menu navbar-background">
        {/* <div className="left menu h1-navbar">
          <img src="image/logo.png" alt="" className="logoImage" />
        </div> */}
        <div className="item">
          <Link to="/">
            <img src="image/logo.png" alt="" className="logoImage" />
          </Link>
        </div>
        <div className="right menu a-navbar">
          <Link to="/our-story" className="item">
            Our-Story
          </Link>
          <Link to="/modal" className="item">
            Modal
          </Link>
          <Link to="/faq" className="item">
            FAQ
          </Link>
          <Link to="/contact-us" className="item">
            Contact
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
