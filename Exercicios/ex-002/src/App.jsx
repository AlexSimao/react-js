import "./App.css";
import Condicional from "./component/Condicional";
import Evento from "./component/Evento";
import Form from "./component/Form";
import Listar from "./component/Listar";

function App() {
  const meusItens = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <>
      <Condicional />
      <Listar array={meusItens} />
    </>
  );
}

export default App;
