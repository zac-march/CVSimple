import React from "react";
import PersonalForm from "./formComponents/personalForm";
import EducationForm from "./formComponents/educationForm";
import ExperienceForm from "./formComponents/experienceForm";
import uniqid from "uniqid";

class Forms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      education: this.addForm([], EducationForm),
      experience: this.addForm([], ExperienceForm),
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  showRemoveButton = (formType) => {
    return this.state[formType].length > 1;
  };

  handleAdd(e) {
    const formType = e.target.dataset.type;
    const Component = formType === "education" ? EducationForm : ExperienceForm;

    this.setState((prevState) => {
      const formArray = this.addForm([...prevState[formType]], Component);
      return { [formType]: formArray };
    });
  }

  addForm(arr, Component) {
    const key = uniqid();
    arr.push(
      <Component
        key={key}
        formKey={key}
        handleChange={this.props.handleChange}
        handleRemove={this.handleRemove}
        showRemoveButton={this.showRemoveButton}
      />
    );
    return arr;
  }

  handleRemove(e) {
    const id = e.target.dataset.id;
    const formType = e.target.dataset.type;

    this.setState((prevState) => {
      const formArray = prevState[formType].filter(
        (form) => form.props.formKey !== id
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
      </div>
    );
  }
}

export default Forms;
