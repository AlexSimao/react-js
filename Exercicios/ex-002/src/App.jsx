import { useState } from "react";
import "./App.css";
import Condicional from "./component/Condicional";
import Evento from "./component/Evento";
import Form from "./component/Form";
import Listar from "./component/Listar";
import SeuNome from "./component/SeuNome";
import Saldacao from "./component/Saldacao";

function App() {
  const meusItens = ["HTML", "CSS", "JavaScript", "React"];

  const [nome, setNome] = useState();

  return (
    <>
      <Condicional />
      <Listar array={meusItens} />
      <SeuNome setNome={setNome} />
      <Saldacao nome={nome} />
    </>
  );
}

export default App;
