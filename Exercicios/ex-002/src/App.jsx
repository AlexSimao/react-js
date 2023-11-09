import "./App.css";
import Evento from "./component/Evento";
import Form from "./component/Form";

function App() {
  return (
    <>
      <div>
        <Evento />
        <Evento conteudo="Alex Simao" />
      </div>
      <Form />
    </>
  );
}

export default App;
