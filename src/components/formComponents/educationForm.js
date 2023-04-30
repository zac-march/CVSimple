import React from "react";
import uniqid from "uniqid";

class EducationForm extends React.Component {
  constructor() {
    super();
    this.id = uniqid();
  }
  render() {
    const { handleChange } = this.props;

    return (
      <form data-type="education">
        <input
          id={"institution_" + this.id}
          placeholder="Establishment"
          onChange={handleChange}
        />
        <input
          id={"city_" + this.id}
          placeholder="City"
          onChange={handleChange}
        />
        <input
          id={"degree_" + this.id}
          placeholder="Degree/Certificate"
          onChange={handleChange}
        />
        <input
          id={"timeframe_" + this.id}
          placeholder="Timeframe"
          onChange={handleChange}
        />
        <textarea
          id={"details_" + this.id}
          placeholder="Additional details.."
          onChange={handleChange}
        ></textarea>
      </form>
    );
  }
}

export default EducationForm;
