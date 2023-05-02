import React from "react";

class ExperienceForm extends React.Component {
  render() {
    const { handleChange, removeButton, formKey } = this.props;

    return (
      <div>
        <form data-type="experience">
          <input
            id={"position_" + formKey}
            placeholder="Job Title"
            onChange={handleChange}
          />
          <input
            id={"timeframe_" + formKey}
            placeholder="Timeframe"
            onChange={handleChange}
          />
          <input
            id={"company_" + formKey}
            placeholder="Company"
            onChange={handleChange}
          />
          <input
            id={"city_" + formKey}
            placeholder="City, State"
            onChange={handleChange}
          />
          <textarea
            id={"details_" + formKey}
            placeholder="Details.."
            onChange={handleChange}
          />
        </form>
        {removeButton}
      </div>
    );
  }
}

export default ExperienceForm;
