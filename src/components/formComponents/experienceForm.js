import React from "react";

class ExperienceForm extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <form className="form-experience">
        <h2>Experience</h2>
        <input id="expTitle" placeholder="Job Title" onChange={handleChange} />
        <input
          id="expTimeframe"
          placeholder="Timeframe"
          onChange={handleChange}
        />
        <input id="expCompany" placeholder="Company" onChange={handleChange} />
        <input id="expCity" placeholder="City, State" onChange={handleChange} />
        <textarea
          id="expDetails"
          placeholder="Details.."
          onChange={handleChange}
        />
      </form>
    );
  }
}

export default ExperienceForm;
