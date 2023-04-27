import React from "react";

class EducationForm extends React.Component {
  render() {
    return (
      <form className="form-education">
        <h2>Education information</h2>
        <input id="university" placeholder="Your University" />
        <input id="degree" placeholder="Your Degree" />
        <input id="timeframe" placeholder="Timeframe of attendance" />
      </form>
    );
  }
}

export default EducationForm;
