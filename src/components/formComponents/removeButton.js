import React from "react";
import trashIcon from "../../images/trash.svg";

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
        <img alt="Remove" src={trashIcon}></img>
      </button>
    );
  }
}

export default RemoveButton;
