import styles from "./Transactions.module.scss";
import React from "react";

const Transactions: React.FC = () => {
  return (
    <>
      <div className={styles.trans}>
        <p>Salario</p>
        <span>+ R$ 4000</span>
      </div>
      <div className={styles.trans}>
        <p>Salario</p>
        <span>+ R$ 4000</span>
      </div>
    </>
  );
};

export default Transactions;
