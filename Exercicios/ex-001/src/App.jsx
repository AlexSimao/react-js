import "./App.css";
import HelloWorld from "./components/HelloWorld";

function App() {
  const nome = "Alex Simão";
  const novoNome = nome.toUpperCase();
  const date = new Date();

  function idade(n) {
    return date.getFullYear() - n;
  }

  const myIMG = "https://github.com/AlexSimao.png";

  return (
    <>
      <h2>Bem-vindo: {novoNome} </h2>
      <img width={150} src={myIMG} alt="Minha foto" />
      <p>Idade: {idade(2003)}</p>
      <HelloWorld />
    </>
  );
}

export default App;
