import React from "react";

class PersonalForm extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <form className="form-personal">
        <h2>Personal information</h2>
        <input
          id="firstName"
          placeholder="First Name"
          onChange={handleChange}
        />
        <input id="lastName" placeholder="Last Name" onChange={handleChange} />
        <input id="address" placeholder="Address" onChange={handleChange} />
        <input id="phone" placeholder="Phone" onChange={handleChange} />
        <input id="email" placeholder="Email" onChange={handleChange} />
        <input id="website" placeholder="Website" onChange={handleChange} />
      </form>
    );
  }
}

export default PersonalForm;
