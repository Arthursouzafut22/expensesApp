import React, {
  useState,
  createContext,
  ReactNode,
  FormEvent,
  useEffect,
} from "react";

interface TransitionProps {
  total: Total;
  positivos: Positivos;
  negativos: Negativos;
  transactions: Transactions[];
  setTransactions: React.Dispatch<React.SetStateAction<Transactions[]>>;
  form: Formdata;
  changeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitTransactions: (event: FormEvent<HTMLFormElement>) => void;
  erro: Erro;
}

interface elementProps {
  children: ReactNode;
}

interface Transactions {
  id: number;
  nome: string;
  valor: number;
}

interface Formdata {
  id: string;
  nome: string;
  valor: string;
}

interface Erro {
  erro: null | string;
}

interface Total {
  total: number;
}

interface Positivos {
  positivos: number;
}

interface Negativos {
  negativos: number;
}

export const ContextTransition = createContext<TransitionProps | undefined>(
  undefined
);

const StorageTransactions = ({ children }: elementProps) => {
  const [transactions, setTransactions] = useState<Transactions[]>([]);
  const [total, setTotal] = useState<Total>({ total: 0 });
  const [positivos, setPositivos] = useState<Positivos>({ positivos: 0 });
  const [negativos, setNegativos] = useState<Negativos>({ negativos: 0 });
  const [erro, setErro] = useState<Erro>({ erro: null });
  const [form, setForm] = useState<Formdata>({
    id: Date.now().toString(),
    nome: "",
    valor: "",
  });

  useEffect(() => {
    const positiveTransactions = transactions.filter(
      (transaction) => transaction.valor > 0
    );
    const negativeTransactions = transactions.filter(
      (transaction) => transaction.valor < 0
    );

    setPositivos({
      positivos: positiveTransactions.reduce(
        (sum, transaction) => sum + transaction.valor,
        0
      ),
    });
    setNegativos({
      negativos: negativeTransactions.reduce(
        (sum, transaction) => sum + transaction.valor,
        0
      ),
    });

    const totalSum = transactions.reduce(
      (sum, transaction) => sum + transaction.valor,
      0
    );
    setTotal({ total: totalSum });
  }, [transactions]);

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: name === "valor" ? Number(value) : value,
    }));
  };

  const onSubmitTransactions = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const newTransaction: Transactions = {
      id: Number(form.id),
      nome: form.nome,
      valor: Number(form.valor),
    };

    if (form.nome === "" || form.valor === "") {
      handleError("Prencha os campo!");
      return;
    } else {
      setErro({ erro: null });
      setTransactions([...transactions, newTransaction]);
      setForm({
        id: Date.now().toString(),
        nome: "",
        valor: "",
      });
    }
  };

  const handleError = (mesagem: string) => {
    setErro({ erro: mesagem });
  };

  return (
    <ContextTransition.Provider
      value={{
        transactions,
        setTransactions,
        total,
        positivos,
        negativos,
        changeValue,
        form,
        onSubmitTransactions,
        erro,
      }}
    >
      {children}
    </ContextTransition.Provider>
  );
};

export default StorageTransactions;
