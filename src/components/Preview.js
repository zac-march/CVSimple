import React from "react";

class Preview extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <div className="preview">
        <div className="preview-header">
          <h1>
            {data.firstName} {data.lastName}
          </h1>
          <p>{data.address}</p>
          <p>
            {data.phone}
            <strong> | </strong>
            {data.email}
            <strong> | </strong>
            <a href={"https://www." + data.website}>{data.website}</a>
          </p>
        </div>

        <div className="preview-education">
          <h2>Education</h2>
          <div>
            <h4>{data.uniName}</h4>
            <h4>{data.uniCity}</h4>
            <h4>
              <i>{data.uniDegree}</i>
            </h4>
            <h4>
              <i>{data.uniTimeframe}</i>
            </h4>
          </div>
          <ul>
            <li>{data.uniDetails}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Preview;
