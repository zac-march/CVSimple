import "./App.css";
import Header from "./components/Header";
import Forms from "./components/Forms";
import Preview from "./components/Preview";
import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
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
  }

  handleChange = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Forms handleChange={this.handleChange} />
        <Preview data={this.state} />
      </div>
    );
  }
}

export default App;
