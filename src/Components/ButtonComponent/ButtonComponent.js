/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from "react";
import "./ButtonComponent.css";

class ButtonComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { buttonName, className, type = "button", ...attrs } = this.props;
    return (
      <button type={type} className={className} {...attrs}>
        {buttonName}
      </button>
    );
  }
}
export default ButtonComponent;
