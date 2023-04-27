import React from "react";
import PersonalForm from "./formComponents/personalForm";
import EducationForm from "./formComponents/educationForm";

class Forms extends React.Component {
  render() {
    return (
      <div className="forms">
        <PersonalForm />
        <EducationForm />
      </div>
    );
  }
}

export default Forms;
