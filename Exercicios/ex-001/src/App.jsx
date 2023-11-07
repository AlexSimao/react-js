import "./App.css";
import Frase from "./components/Frase";
import HelloWorld from "./components/HelloWorld";
import Pessoa from "./components/Pesssoa";
import SayMyName from "./components/SayMyName";

function App() {
  const nome = "Alex Simão";
  const myIMG = "https://github.com/AlexSimao.png";
  const ano_do_nacimento = 2003;

  function idade(anoDoNacimento) {
    const date = new Date();
    return date.getFullYear() - anoDoNacimento;
  }

  return (
    <>
      <Frase />
      <Frase />
      <Pessoa
        nome={nome}
        idade={idade(ano_do_nacimento)}
        foto={myIMG}
      />
      <SayMyName nome="Julia" />
      <SayMyName nome="Guilerme" />
    </>
  );
}

export default App;
