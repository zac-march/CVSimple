import React from "react";

class Preview extends React.Component {
  render() {
    return (
      <div className="preview">
        <div className="preview-header">
          <h1>Zachariah March</h1>
          <p>Melbourne, VIC</p>
          <p>
            +61412345567<strong> | </strong>
            zacmarch101@gmail.com<strong> | </strong>
            <a href="zac-march.io">zac-march.io</a>
          </p>
        </div>

        <div className="preview-education">
          <h2>Education</h2>
          <div>
            <h4>James Cook University</h4>
            <h4>Townsville, QLD</h4>
            <h4>
              <i>Bachelor of information technology</i>
            </h4>
            <h4>
              <i>2019 - 2021</i>
            </h4>
          </div>
          <ul>
            <li>
              Achievement: Winner of the 2021 Prize for Excellence in Third year
              Bachelor of Information Technology
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Preview;
