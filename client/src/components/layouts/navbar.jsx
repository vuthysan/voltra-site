import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    return (
      <React.Fragment>
        <div className="ui secondary stackable menu navbar-background">
          <div className="item">
            <Link to="/">
              <img
                src="image/voltra_logo.png"
                alt=""
                className="logoImage-navbar"
              />
            </Link>
          </div>
          {/* Mobile Navbar */}
          <div className="item mobileMenu" onClick={this.toggleMenu}>
            <div className="menu toggleMenu">
              <i class="icofont-navigation-menu" />
            </div>
          </div>
          {this.state.visible && (
            <div className="right menu a-navbar voltra-menu">
              <Link to="/our-story" className="item">
                Our Story
              </Link>
              <Link to="/model" className="item">
                Model
              </Link>
              <Link to="/faq" className="item">
                FAQ
              </Link>
              {/* <Link to="/contact-us" className="item">
                  Contact us
                </Link> */}
            </div>
          )}

          <div className="right desktopMenu menu a-navbar">
            <Link to="/our-story" className="item">
              Our Story
            </Link>
            <Link to="/model" className="item">
              Model
            </Link>
            <Link to="/faq" className="item">
              FAQ
            </Link>
            {/* <Link to="/contact-us" className="item">
              Contact us
            </Link> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
