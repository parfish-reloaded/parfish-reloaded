import React from 'react';
import './Input.css';

function Input({ labelClassName, ...inputProps }) {
  return (
    <label className={labelClassName}>
      <input {...inputProps} />
    </label>
  );
}

export default Input;
