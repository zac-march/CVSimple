import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Resume Builder</h1>
        <h2>
          An application by
          <a href="https://github.com/zac-march" alt="Link to GitHub">
            <button>
              <img alt="Link to GitHub"></img>
              zac-march
            </button>
          </a>
          <button onClick={this.props.savePreview}>Save</button>
        </h2>
      </header>
    );
  }
}

export default Header;
