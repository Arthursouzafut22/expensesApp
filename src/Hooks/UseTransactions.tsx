import React, {
  useState,
  createContext,
  ReactNode,
  FormEvent,
  useEffect,
} from "react";

// Define a interface para o contexto
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

// Define a interface para os elementos filhos
interface elementProps {
  children: ReactNode;
}

// Define a interface para uma transação
interface Transactions {
  id: number;
  nome: string;
  valor: number;
}

// Define a interface para os dados do formulário
interface Formdata {
  id: string;
  nome: string;
  valor: string;
}
// Define a interface para o erro
interface Erro {
  erro: null | string;
}

// Define a interface para o total
interface Total {
  total: number;
}

interface Positivos {
  positivos: number;
}

interface Negativos {
  negativos: number;
}

// Cria o contexto com valor inicial como undefined
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

  // Função para calcular e filtrar transações
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

    // Calcular o total
    const totalSum = transactions.reduce(
      (sum, transaction) => sum + transaction.valor,
      0
    );
    setTotal({ total: totalSum });
  }, [transactions]); // Atualiza sempre que "transactions" mudar


  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: name === "valor" ? Number(value) : value, // Converte "valor" para número
    }));
  };


  const onSubmitTransactions = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const newTransaction: Transactions = {
      id: Number(form.id), // Convertendo o id para number se necessário
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
        id: Date.now().toString(), // Gera um novo id para o próximo formulário
        nome: "",
        valor: "",
      });
    }
  };
  


  // erro
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
