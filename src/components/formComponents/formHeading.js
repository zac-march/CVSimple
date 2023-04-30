import React from "react";

class FormHeading extends React.Component {
  render() {
    const { type, title, handleAdd } = this.props;

    return (
      <div className="form-head">
        <h2>{title}</h2>
        {handleAdd && (
          <button data-type={type} onClick={handleAdd}>
            Add
          </button>
        )}
      </div>
    );
  }
}

export default FormHeading;
