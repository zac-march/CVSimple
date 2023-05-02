import React from "react";
import PersonalForm from "./formComponents/personalForm";
import EducationForm from "./formComponents/educationForm";
import ExperienceForm from "./formComponents/experienceForm";
import SkillsForm from "./formComponents/skillsForm";
import RemoveButton from "./formComponents/removeButton";
import uniqid from "uniqid";

class Forms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      education: this.addForm([], EducationForm, "education"),
      experience: this.addForm([], ExperienceForm, "experience"),
      skills: this.addForm([], SkillsForm, "skills"),
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  showRemoveButton = (formType) => {
    return this.state[formType].length > 1;
  };

  handleAdd(e) {
    const formType = e.target.dataset.type;

    let Component;
    switch (formType) {
      case "education":
        Component = EducationForm;
        break;
      case "experience":
        Component = ExperienceForm;
        break;
      case "skills":
        Component = SkillsForm;
        break;
      default:
        throw new Error(`Invalid formType: ${formType}`);
    }

    this.setState((prevState) => {
      const formArray = this.addForm(
        [...prevState[formType]],
        Component,
        formType
      );
      return { [formType]: formArray };
    });
  }

  addForm(arr, Component, formType) {
    const key = uniqid();
    arr.push(
      <Component
        key={key}
        handleChange={this.props.handleChange}
        removeButton={
          <RemoveButton
            handleRemove={this.handleRemove}
            showRemoveButton={this.showRemoveButton}
            formKey={key}
            formType={formType}
          />
        }
      />
    );
    return arr;
  }

  handleRemove(e) {
    const id = e.target.dataset.id;
    const formType = e.target.dataset.type;
    this.setState((prevState) => {
      const formArray = prevState[formType].filter(
        (form) => form.props.removeButton.props.formKey !== id
      );
      return { [formType]: formArray };
    });
  }

  render() {
    const { handleChange } = this.props;

    return (
      <div className="forms">
        <div>
          <h2>Personal</h2>
          <PersonalForm handleChange={handleChange} />
        </div>
        <div>
          <h2>Education</h2>
          {this.state.education}
          <button
            data-type="education"
            onClick={this.handleAdd}
            disabled={this.state.education.length > 1}
          >
            Add
          </button>
        </div>
        <div>
          <h2>Experience</h2>
          {this.state.experience}
          <button
            data-type="experience"
            onClick={this.handleAdd}
            disabled={this.state.experience.length > 3}
          >
            Add
          </button>
        </div>
        <div>
          <h2>Skills & Technologies</h2>
          {this.state.skills}
          <button
            data-type="skills"
            onClick={this.handleAdd}
            disabled={this.state.skills.length > 5}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default Forms;
