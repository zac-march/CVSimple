import React from "react";
import PersonalForm from "./formComponents/personalForm";
import EducationForm from "./formComponents/educationForm";
import ExperienceForm from "./formComponents/experienceForm";
import FormHeading from "./formComponents/formHeading";
import uniqid from "uniqid";

class Forms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      education: [
        <EducationForm key={uniqid()} handleChange={props.handleChange} />,
      ],
      experience: [
        <ExperienceForm key={uniqid()} handleChange={props.handleChange} />,
      ],
    };

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(e) {
    const formType = e.target.dataset.type;
    const formList = this.state[formType];
    const Component = formType === "education" ? EducationForm : ExperienceForm;

    this.setState((prevState) => ({
      ...prevState,
      [formType]: formList.concat(
        <Component key={uniqid()} handleChange={this.props.handleChange} />
      ),
    }));
  }
  render() {
    const { handleChange } = this.props;

    return (
      <div className="forms">
        <div>
          <FormHeading type="personal" title="Personal" />
          <PersonalForm handleChange={handleChange} />
        </div>
        <div>
          <FormHeading
            type="education"
            title="Education"
            handleAdd={this.handleAdd}
          />
          {this.state.education}
        </div>
        <div>
          <FormHeading
            type="experience"
            title="Experience"
            handleAdd={this.handleAdd}
          />
          {this.state.experience}
        </div>
      </div>
    );
  }
}

export default Forms;
