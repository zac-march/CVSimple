import React from "react";

class RemoveButton extends React.Component {
  render() {
    const { handleRemove, showRemoveButton, formKey, formType } = this.props;

    return (
      <button
        style={{
          display: showRemoveButton(formType) ? "inline-block" : "none",
        }}
        data-id={formKey}
        data-type={formType}
        onClick={handleRemove}
      >
        Remove
      </button>
    );
  }
}

export default RemoveButton;
