import styles from "./Balance.module.scss";

const Balance: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.sald}>SALDO ATUAL</p>
      <span>R$ 3563,00</span>
      <div className={styles.balance}>
        <div className={styles.rec}>
          <p>RECEITAS</p>
          <p>R$ 4000,00</p>
        </div>
        <div className={styles.des}>
          <p>DESPESAS</p>
          <p>R$ 437,00</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
