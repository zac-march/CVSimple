import React from "react";

class SkillsForm extends React.Component {
  render() {
    const { handleChange, removeButton, formKey } = this.props;

    return (
      <div className="skill-container">
        <form data-type="skills">
          <input
            id={"skill_" + formKey}
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
