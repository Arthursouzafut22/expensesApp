import styles from "./Button.module.scss";
import React from "react";

type elementChindren = {
  children: React.ReactNode;
};

const Button: React.FC<elementChindren> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
