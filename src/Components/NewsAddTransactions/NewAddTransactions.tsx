import Input from "../Input/Input";

const NewAddTransactions = () => {
  return (
    <>
      <Input
        label="Nome"
        type="text"
        placeholder="Nome da transação"
        name="name"
        id="name"
      />
      <Input
        label="Valor"
        type="number"
        placeholder="Valor da transação"
        name="valor"
        id="Valor"
      />
    </>
  );
};

export default NewAddTransactions;
