import React from "react";
import PersonalForm from "./formComponents/personalForm";
import EducationForm from "./formComponents/educationForm";

class Forms extends React.Component {
  render() {
    const { handleChange } = this.props;

    return (
      <div className="forms">
        <PersonalForm handleChange={handleChange} />
        <EducationForm handleChange={handleChange} />
      </div>
    );
  }
}

export default Forms;
