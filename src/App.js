import "./App.css";
import Header from "./components/Header";
import Forms from "./components/Forms";
import Preview from "./components/Preview";
import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {};

    this.handleAutoFill = this.handleAutoFill.bind(this);
  }

  handleAutoFill() {
    const presetData = {
      firstName: "Jordan",
      lastName: "Walke",
      address: "Stanford, California",
      phone: "+61421346576",
      email: "jordan.walke@fb.com",
      website: "twitter.com/jordwalke",
      uniName: "University of Washington",
      uniCity: "Standford, CA",
      uniDegree: "Bachelor's of Science, The Science of Computation",
      uniTimeframe: "2005 - 2008",
      uniDetails:
        "Undergraduate research: Built privacy controls and interactive web interface for live location tracking.",
    };

    for (let key in presetData) {
      const inputElement = document.getElementById(key);
      inputElement.value = presetData[key];
    }

    this.setState(presetData);
  }

  handleChange = (e) => {
    const [itemKey, groupKey] = e.target.id.split("_");
    const formType = e.target.parentElement.dataset.type;

    this.setState((prevState) => {
      const stateCopy = { ...prevState[formType] };

      if (!stateCopy[groupKey]) {
        stateCopy[groupKey] = {};
      }

      const updatedGroupKey = {
        ...stateCopy[groupKey],
        [itemKey]: e.target.value,
      };

      const updatedState = {
        ...stateCopy,
        [groupKey]: updatedGroupKey,
      };

      return { [formType]: updatedState };
    });
  };

  render() {
    return (
      <div className="App">
        <Header handleAutoFill={this.handleAutoFill} />
        <Forms handleChange={this.handleChange} />
        <Preview data={this.state} />
      </div>
    );
  }
}

export default App;
