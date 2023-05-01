import React from "react";
import uniqid from "uniqid";

class SkillsForm extends React.Component {
  constructor() {
    super();
    this.id = uniqid();
  }
  render() {
    const { handleChange, handleRemove, formKey, showRemoveButton } =
      this.props;

    return (
      <div>
        <form data-type="skills">
          <input
            id={"skill_" + this.id}
            placeholder="Skill/Technology"
            onChange={handleChange}
          />
        </form>
        <button
          style={{
            display: showRemoveButton("skills") ? "inline-block" : "none",
          }}
          data-id={formKey}
          data-type={"skills"}
          onClick={handleRemove}
        >
          Remove
        </button>
      </div>
    );
  }
}

export default SkillsForm;
