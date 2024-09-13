import "./App.scss";
import Wrapper from "./Components/Wrapper/Wrapper";
import StorageTransactions from "./Hooks/UseTransactions";

function App() {
  return (
    <>
      <StorageTransactions>
        <Wrapper />
      </StorageTransactions>
    </>
  );
}

export default App;
