// InputControl.jsx
import React from "react";
import styles from "./InputControl.module.css";

function InputControl({ label, ...inputProps }) {
  return (
    <div className={styles.container}>
      {label && <label>{label}</label>}
      <input type="text" {...inputProps} />
    </div>
  );
}

export default InputControl;
