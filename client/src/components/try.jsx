import React, { Component } from "react";
import Navbar from "../components/layouts/navbar";
import axios from "axios";
import swal from "sweetalert";

const Input = ({ name, label, value, onChange, error, type }) => {
  return (
    <div className={error ? "field error" : "field"}>
      <label>{label}</label>
      <input type={type} value={value} name={name} onChange={onChange} />
      {error && (
        <div class="ui pointing red basic label">{label + " is required"}</div>
      )}
    </div>
  );
};

const InputRadio = ({ value, checked, onChange, label }) => {
  return (
    <div class="field">
      <div class="ui big radio checkbox">
        <input
          type="radio"
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <label>{label}</label>
      </div>
    </div>
  );
};

class Try extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      color: " ",
      // payment: " ",
      message: "",
      errors: {},
      alert: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMethodColor = this.handleMethodColor.bind(this);
  }
  validate = () => {
    const errors = {};
    const state = this.state;
    // Name
    if (state.firstName.trim() === "")
      errors.firstName = "Please enter the value";
    if (state.lastName.trim() === "")
      errors.lastName = "Please enter the value";

    // Phone Number
    if (state.phoneNumber.trim() === "")
      errors.phoneNumber = "Please enter the value";

    // Email
    if (state.email.trim() === "") errors.email = "Please enter the value";
    if (typeof state.email !== "undefined") {
      let lastAtPos = state.email.lastIndexOf("@");
      let lastDotPos = state.email.lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          state.email.indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          state.email.length - lastDotPos > 2
        )
      ) {
        errors.email = "Email is not valid";
      }
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };
  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  handleMethodColor = e => {
    this.setState({ color: e.target.value });
  };

  // Handle Submit
  async handleSubmit(e) {
    e.preventDefault();
    const { firstName, lastName, email, phoneNumber, message } = this.state;

    const errors = this.validate();

    try {
      await this.setState({ errors: errors || {} });
      if (errors) return swal("Oh noes!", "The Try request failed!", "error");
      const form = await axios.post("http://localhost:5001/api/form", {
        firstName,
        lastName,
        email,
        phoneNumber,
        message
      });
      if (form)
        return swal("Good Job!", "Your message has been sent!! ", "success");
    } catch (error) {
      throw error;
    }
  }
  render() {
    const { errors } = this.state;
    console.log(this.state.message);

    return (
      <React.Fragment>
        <Navbar />
        <div className="ui text container">
          <center>
            <h1 className="warranty">Try</h1>
            <br />
          </center>

          <form onSubmit={this.handleSubmit}>
            <div className="ui form">
              <div className="two fields">
                {/* <div className="field">
                  <label>First Name</label>
                  <input
                    type="text"
                    autoFocus={true}
                    name="firstName"
                    onChange={this.handleChange}
                  />
                </div> */}
                <Input
                  name="firstName"
                  label="First Name"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  error={errors.firstName}
                  type="text"
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  error={errors.lastName}
                  type="text"
                />
              </div>
            </div>
            <div className="ui form ">
              <div className="two fields">
                <Input
                  name="email"
                  label="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  error={errors.email}
                  type="email"
                />
                <Input
                  name="phoneNumber"
                  label="Phone Number"
                  value={this.state.phoneNumber}
                  onChange={this.handleChange}
                  error={errors.phoneNumber}
                  type="number"
                />
              </div>

              {/* <div className="field">
                <label>Voltra Color</label>
                <div class="ui form">
                  <div class="inline fields">
                    <InputRadio
                      value="black"
                      checked={this.state.color === "black"}
                      onChange={this.handleMethodColor}
                      label="Glossy Black"
                    />
                    <InputRadio
                      value="white"
                      checked={this.state.color === "white"}
                      onChange={this.handleMethodColor}
                      label="Glossy White"
                    />
                    <InputRadio
                      value="blue"
                      checked={this.state.color === "blue"}
                      onChange={this.handleMethodColor}
                      label="Glossy Blue"
                    />
                    <InputRadio
                      value="orange"
                      checked={this.state.color === "orange"}
                      onChange={this.handleMethodColor}
                      label="Matte Orange"
                    />
                    <InputRadio
                      value="green"
                      checked={this.state.color === "green"}
                      onChange={this.handleMethodColor}
                      label="Matte Green"
                    />
                  </div>
                </div>
              </div> */}
              <div className="field">
                <label>Message</label>
                <textarea
                  name="message"
                  value={this.state.message}
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <center>
                  <button className="ui ui black center button">Submit</button>
                </center>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Try;
