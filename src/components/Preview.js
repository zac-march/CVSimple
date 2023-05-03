import React from "react";
import uniqid from "uniqid";

class Preview extends React.Component {
  generateHtml(data, heading, props) {
    let html = [];
    for (let key in data) {
      const subData = data[key];
      let listItems = [];
      if (subData[props[2]]) {
        const detailsArr = subData[props[2]].split(/\r?\n/);
        listItems = detailsArr.map((item) => <li key={uniqid()}>{item}</li>);
      }

      html.push(
        <div key={uniqid()}>
          <div className="preview-subheading">
            <h4>{subData[heading[0]]}</h4>
            <h4>{subData[heading[1]]}</h4>
            <h4>
              <i>{subData[props[0]]}</i>
            </h4>
            <h4>
              <i>{subData[props[1]]}</i>
            </h4>
          </div>
          <ul>{listItems}</ul>
        </div>
      );
    }
    return html;
  }

  renderEducation(data) {
    if (!data) return;
    const heading = ["institution", "city"];
    const props = ["degree", "timeframe", "details"];
    return (
      <div className="preview-education">
        <h2>Education</h2>
        {this.generateHtml(data, heading, props)}
      </div>
    );
  }

  renderExperience(data) {
    if (!data) return;
    const heading = ["position", "timeframe"];
    const props = ["company", "city", "details"];
    return (
      <div className="preview-experience">
        <h2>Experience</h2>
        {this.generateHtml(data, heading, props)}
      </div>
    );
  }

  renderPersonal(data) {
    const groupKey = Object.keys(data)[0];
    const perData = data[groupKey];
    return (
      <div className="preview-header">
        <h1>
          {perData.firstName} {perData.lastName}
        </h1>
        <p>{perData.address}</p>
        <p>
          {perData.phone}
          <strong> | </strong>
          {perData.email}
          <strong> | </strong>
          <a href={"https://www." + perData.website}>{perData.website}</a>
        </p>
      </div>
    );
  }

  renderSkills(data) {
    const skillsValues = Object.values(data).map((value) => value.skill);
    const listItems = skillsValues.map((item) => (
      <li key={uniqid()}>{item}</li>
    ));
    return (
      <div>
        <h2>Skills & Technologies</h2>
        <ul>{listItems}</ul>
      </div>
    );
  }

  render() {
    const { data } = this.props;
    return (
      <div className="preview" id="preview">
        {data.personal && this.renderPersonal(data.personal)}
        {data.education && this.renderEducation(data.education)}
        {data.experience && this.renderExperience(data.experience)}
        {data.skills && this.renderSkills(data.skills)}
      </div>
    );
  }
}

export default Preview;
