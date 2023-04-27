import React from "react";
import PersonalForm from "./formComponents/personalForm";
import EducationForm from "./formComponents/educationForm";
import ExperienceForm from "./formComponents/experienceForm";

class Forms extends React.Component {
  render() {
    const { handleChange } = this.props;

    return (
      <div className="forms">
        <PersonalForm handleChange={handleChange} />
        <EducationForm handleChange={handleChange} />
        <ExperienceForm handleChange={handleChange} />
      </div>
    );
  }
}

export default Forms;
