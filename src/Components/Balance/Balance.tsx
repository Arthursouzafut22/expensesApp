import styles from "./Balance.module.scss";
import { ContextTransition } from "../../Hooks/UseTransactions";
import { useContext } from "react";
import FormatePrice from "../FormateValue/FormateValue";

const Balance: React.FC = () => {
  const context = useContext(ContextTransition);

  if (!context) return;

  const { total, positivos, negativos } = context;

  return (
    <div className={styles.wrapper}>
      <p className={styles.sald}>SALDO ATUAL</p>
      <span>{FormatePrice(total.total)}</span>
      <div className={styles.balance}>
        <div className={styles.rec}>
          <p>RECEITAS</p>
          <p>{FormatePrice(positivos?.positivos)}</p>
        </div>
        <div className={styles.des}>
          <p>DESPESAS</p>
          <p>{FormatePrice(negativos.negativos)}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
