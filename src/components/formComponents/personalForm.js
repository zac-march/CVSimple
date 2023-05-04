import React from "react";
import uniqid from "uniqid";

class PersonalForm extends React.Component {
  constructor() {
    super();
    this.id = uniqid();
  }

  render() {
    const { handleChange } = this.props;
    return (
      <div>
        <form data-type="personal">
          <input
            id={"firstName_" + this.id}
            placeholder="First Name"
            onChange={handleChange}
          />
          <input
            id={"lastName_" + this.id}
            placeholder="Last Name"
            onChange={handleChange}
          />
          <input
            id={"address_" + this.id}
            placeholder="Address"
            onChange={handleChange}
          />
          <input
            id={"phone_" + this.id}
            placeholder="Phone"
            onChange={handleChange}
          />
          <input
            id={"email_" + this.id}
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            id={"website_" + this.id}
            placeholder="Website"
            onChange={handleChange}
          />
        </form>
      </div>
    );
  }
}

export default PersonalForm;
