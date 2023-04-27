import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form>
        <h2>Personal information</h2>
        <input id="firstName" placeholder="First Name" />
        <input id="lastName" placeholder="Last Name" />
        <input id="address" placeholder="Your Address" />
        <input id="website" placeholder="Your Website" />
        <input id="phoneNumber" placeholder="Contact number" />
      </form>
    );
  }
}

export default Form;
