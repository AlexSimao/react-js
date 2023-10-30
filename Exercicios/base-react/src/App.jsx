import Fulano from "./componentes/Fulano";
import Titulo from "./componentes/Titulo";

function App() {
  return (
    <>
      <Titulo cor="darkgreen" />
      <Fulano cor="purple" nome="Luisa Souza" />
      <Fulano cor="orange" nome="Jean Santos" />
      <Fulano cor="red" nome="Matheus Santini" />
    </>
  );
}

export default App;
