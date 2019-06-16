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
        <p>Copyright © 2019 Voltra. All rights reserved</p>
        <Link to="#">
          <i className="icofont-facebook footer-icons" />
        </Link>
        <Link to="#">
          <i className="icofont-instagram footer-icons" />
        </Link>
      </center>
    </div>
  );
};

export default Footer;
