import React from "react";
import styles from "./Input.module.scss";

interface PropsInput {
  type: string;
  id: string;
  label: string;
  name: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const Input: React.FC<PropsInput> = ({
  type,
  id,
  label,
  name,
  value,
  placeholder,
  onChange,
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
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
      />
    </>
  );
};

export default Input;
