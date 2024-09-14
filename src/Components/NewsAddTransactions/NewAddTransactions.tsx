import styles from "./NewAddTransactions.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { ContextTransition } from "../../Hooks/UseTransactions";
import { useContext } from "react";

const NewAddTransactions = () => {
  const context = useContext(ContextTransition);

  if (!context) {
    return;
  }

  const { form, changeValue, onSubmitTransactions, erro } = context;
  return (
    <>
      <form onSubmit={onSubmitTransactions} className={styles.form}>
        <Input
          label="Nome"
          type="text"
          placeholder="Nome da transação"
          value={form?.nome}
          onChange={changeValue}
          name="nome"
          id="name"
        />
        <label htmlFor="Valor">Valor</label>
        <p
          style={{
            fontSize: "0.88rem",
            textAlign: "left",
            marginBottom: " 0.25rem",
          }}
        >
          (Negativo- despesas,positivo - receitas)
        </p>
        <Input
          label=""
          type="number"
          placeholder="Valor da transação"
          onChange={changeValue}
          value={form?.valor}
          name="valor"
          id="Valor"
        />
        {erro && (
          <p style={{ color: "red", fontSize: "0.81rem" }}>{erro.erro}</p>
        )}
        <Button>Adicionar</Button>
      </form>
    </>
  );
};

export default NewAddTransactions;
