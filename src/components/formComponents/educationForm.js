import React from "react";

class EducationForm extends React.Component {
  render() {
    return (
      <form className="form-education">
        <h2>Education information</h2>
        <input id="university" placeholder="Your University" />
        <input id="degree" placeholder="Your Degree" />
        <input id="education-location" placeholder="Location" />
        <input id="timeframe" placeholder="Timeframe" />
        <textarea
          id="education-details"
          placeholder="Additional details.."
        ></textarea>
      </form>
    );
  }
}

export default EducationForm;
