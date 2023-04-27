import React from "react";

class EducationForm extends React.Component {
  render() {
    const { handleChange } = this.props;

    return (
      <form className="form-education">
        <h2>Education information</h2>
        <input
          id="uniName"
          placeholder="Your University"
          onChange={handleChange}
        />
        <input id="uniCity" placeholder="City" onChange={handleChange} />
        <input
          id="uniDegree"
          placeholder="Your Degree"
          onChange={handleChange}
        />
        <input
          id="uniTimeframe"
          placeholder="Timeframe"
          onChange={handleChange}
        />
        <textarea
          id="uniDetails"
          placeholder="Additional details.."
          onChange={handleChange}
        ></textarea>
      </form>
    );
  }
}

export default EducationForm;
