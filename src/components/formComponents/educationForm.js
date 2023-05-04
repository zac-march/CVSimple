import React from "react";

class EducationForm extends React.Component {
  render() {
    const { handleChange, removeButton, formKey } = this.props;

    return (
      <div>
        <form data-type="education">
          <input
            id={"institution_" + formKey}
            placeholder="Institution"
            onChange={handleChange}
          />
          <input
            id={"city_" + formKey}
            placeholder="City"
            onChange={handleChange}
          />
          <input
            id={"degree_" + formKey}
            placeholder="Degree/Certificate"
            onChange={handleChange}
          />
          <input
            id={"timeframe_" + formKey}
            placeholder="Timeframe"
            onChange={handleChange}
          />
          <textarea
            id={"details_" + formKey}
            placeholder="Additional details.."
            onChange={handleChange}
          ></textarea>
        </form>
        {removeButton}
      </div>
    );
  }
}

export default EducationForm;
