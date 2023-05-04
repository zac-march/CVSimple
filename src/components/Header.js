import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header-top">
          <h1>Resume Builder</h1>
          <div className="header-options">
            <button onClick={this.props.savePreview}>Save</button>
            <button onClick={this.props.autoFill}>Autofill</button>
          </div>
        </div>
        <div className="header-bottom">
          <h2>An application by</h2>
          <a href="https://github.com/zac-march" alt="Link to GitHub">
            <button>
              <img alt="Link to GitHub"></img>
              zac-march
            </button>
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
