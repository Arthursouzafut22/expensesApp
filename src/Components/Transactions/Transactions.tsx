import styles from "./Transactions.module.scss";
import React from "react";
import { ContextTransition } from "../../Hooks/UseTransactions";
import { useContext } from "react";
import FormatePrice from "../FormateValue/FormateValue";

const Transactions: React.FC = () => {
  const context = useContext(ContextTransition);
  if (!context) return;

  const { transactions } = context;

  return (
    <>
      {transactions.length > 0 ? (
        transactions.map(({ id, nome, valor }) => (
          <div
            className={styles.trans}
            key={id}
            style={valor < 0 ? { borderRight: "5px solid red" } : undefined}
          >
            <p>{nome}</p>
            <span>
              {valor < 0 ? "-" : "+"} {FormatePrice(Math.abs(valor))}
            </span>
          </div>
        ))
      ) : (
        <p>Nenhuma transação registrada...</p>
      )}
    </>
  );
};

export default Transactions;
