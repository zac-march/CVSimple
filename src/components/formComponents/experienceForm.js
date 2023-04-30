import React from "react";
import uniqid from "uniqid";

class ExperienceForm extends React.Component {
  constructor() {
    super();
    this.id = uniqid();
  }
  render() {
    const { handleChange } = this.props;

    return (
      <form data-type="experience">
        <input
          id={"position_" + this.id}
          placeholder="Job Title"
          onChange={handleChange}
        />
        <input
          id={"timeframe_" + this.id}
          placeholder="Timeframe"
          onChange={handleChange}
        />
        <input
          id={"company_" + this.id}
          placeholder="Company"
          onChange={handleChange}
        />
        <input
          id={"city_" + this.id}
          placeholder="City, State"
          onChange={handleChange}
        />
        <textarea
          id={"details_" + this.id}
          placeholder="Details.."
          onChange={handleChange}
        />
      </form>
    );
  }
}

export default ExperienceForm;
