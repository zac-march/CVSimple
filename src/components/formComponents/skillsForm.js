import React from "react";
import uniqid from "uniqid";

class SkillsForm extends React.Component {
  constructor() {
    super();
    this.id = uniqid();
  }
  render() {
    const { handleChange, removeButton } = this.props;

    return (
      <div>
        <form data-type="skills">
          <input
            id={"skill_" + this.id}
            placeholder="Skill/Technology"
            onChange={handleChange}
          />
        </form>
        {removeButton}
      </div>
    );
  }
}

export default SkillsForm;
