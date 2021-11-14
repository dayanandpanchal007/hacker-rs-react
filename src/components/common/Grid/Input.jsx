import React, { Component } from 'react';

class Input extends Component {

  render() {
    const { type, bindId, name, label, defaultValue, disabled, onChange } = this.props;
    const inputType = type ? type : 'text'
    const inputDisable = disabled || false;
    return (
      <div className="form-group">
        <label htmlFor={bindId}>{label}</label>
        <input type={inputType} className="form-control" id={bindId} name={name} onChange={onChange} disabled={inputDisable} defaultValue={defaultValue} />
      </div>
    );
  }
}
 
export default Input;