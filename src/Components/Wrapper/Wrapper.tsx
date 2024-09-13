import styles from "./Wrapper.module.scss";
import React from "react";
import Balance from "../Balance/Balance";
import Transactions from "../Transactions/Transactions";
import NewAddTransactions from "../NewsAddTransactions/NewAddTransactions";

const styleWrapper = { margin: "10px 0px", fontWeight: "bold" };

const Wrapper: React.FC = () => {
  return (
    <section className={styles.section}>
      <h1>Controle de despesas</h1>
      <div className={styles.wpp}>
        <Balance />
        <p style={styleWrapper}>Transações</p>
        <Transactions />
        <p style={styleWrapper}>Adicionar transação</p>
        <NewAddTransactions />
      </div>
    </section>
  );
};

export default Wrapper;
