import styles from "./Wrapper.module.scss";
import React from "react";
import Balance from "../Balance/Balance";
import Transactions from "../Transactions/Transactions";
import NewAddTransactions from "../NewsAddTransactions/NewAddTransactions";

const styleWrapper = { margin: "0.625rem 0", fontWeight: "bold" };

const Wrapper: React.FC = () => {
  return (
    <div className={styles.wpp}>
      <h1>Controle de despesas</h1>
      <Balance />
      <p style={styleWrapper}>Transações</p>
      <Transactions />
      <p style={styleWrapper}>Adicionar transação</p>
      <NewAddTransactions />
    </div>
  );
};

export default Wrapper;
