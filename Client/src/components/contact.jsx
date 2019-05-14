import React, { Component } from "react";
import Navbar from "../components/layouts/navbar";

class Contact extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="ui text container">
          <center>
            <h1 className="warranty">Contact Us</h1>
            <br />
          </center>
          <div className="ui form">
            <div className="two fields">
              <div className="field">
                <label>First Name</label>
                <input type="text" Username id />
              </div>
              <div className="field">
                <label>Last Name</label>
                <input type="text" Username id />
              </div>
            </div>
          </div>
          <div className="ui form ">
            <div className="field">
              <label>Email</label>
              <input type="text" Username id />
            </div>
            <div className="field">
              <label>Message</label>
              <textarea />
            </div>
            <div className="field">
              <center>
                <button className="ui ui black center button">
                  Send Message
                </button>
              </center>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
