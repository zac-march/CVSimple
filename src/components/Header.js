import React from "react";

class Header extends React.Component {
  render() {
    const { handleAutoFill } = this.props;
    return (
      <header>
        <h1>Resume Builder</h1>
        <h2>An application by Zac March</h2>
        <button onClick={handleAutoFill}>Auto fill</button>
      </header>
    );
  }
}

export default Header;
