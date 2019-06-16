import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footerBack">
      <center>
        <Link to="#">
          <img
            className="ui tiny image"
            src="image/VOLTRA_Logo.png"
            alt="smallworld-venture"
          />
        </Link>
        <br />
        <br />
        <Link to="#">
          <i className="icofont-facebook footer-icons" />
        </Link>
        <Link to="#">
          <i className="icofont-instagram footer-icons" />
        </Link>
        <br />
        <br />
        <p>Copyright © 2019 VOLTRA. All rights reserved</p>
      </center>
    </div>
  );
};

export default Footer;
