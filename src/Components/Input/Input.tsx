import React from "react";
import styles from "./Input.module.scss";
type PropsInput = {
  type: string;
  id: string;
  label: string;
  name: string;
  placeholder: string;
};

const Input: React.FC<PropsInput> = ({
  type,
  id,
  label,
  name,
  placeholder,
}) => {
  return (
    <>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={styles.input}
      />
    </>
  );
};

export default Input;
