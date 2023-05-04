import React from "react";

class RemoveButton extends React.Component {
  render() {
    const { handleRemove, showRemoveButton, formKey, formType } = this.props;

    return (
      <button
        className="remove-button"
        disabled={showRemoveButton(formType) ? false : true}
        data-id={formKey}
        data-type={formType}
        onClick={handleRemove}
      >
        B
      </button>
    );
  }
}

export default RemoveButton;
