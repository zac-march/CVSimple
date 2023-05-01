import React from "react";
import uniqid from "uniqid";

class ExperienceForm extends React.Component {
  constructor() {
    super();
    this.id = uniqid();
  }
  render() {
    const { handleChange, handleRemove, formKey, showRemoveButton } =
      this.props;

    return (
      <div>
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
        <button
          style={{
            display: showRemoveButton("experience") ? "inline-block" : "none",
          }}
          data-id={formKey}
          data-type={"experience"}
          onClick={handleRemove}
        >
          Remove
        </button>
      </div>
    );
  }
}

export default ExperienceForm;
