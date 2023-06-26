import React from "react";
import githubIcon from "../images/github.svg";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header-top">
          <h1>CVSimple</h1>
          <div className="header-options">
            <button onClick={this.props.savePreview}>Save</button>
            <button onClick={this.props.autoFill}>Autofill</button>
          </div>
        </div>
        <div className="header-bottom">
          <h2>An application by</h2>
          <a href="https://github.com/zac-march" alt="Link to GitHub">
            <button>
              <img src={githubIcon} alt="Link to GitHub"></img>
              <p>zac-march</p>
            </button>
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
