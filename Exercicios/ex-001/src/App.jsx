import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const nome = "Alex Simão";
  const novoNome = nome.toUpperCase();
  const date = new Date()

  function idade(n) {
    return date.getFullYear() - n
  }

  const myIMG = "https://github.com/AlexSimao.png"

  return (
    <>
      <h1>Bem-vindo: {novoNome} </h1>
      <img width={150} src={myIMG} alt="Minha foto" />
      <p>Idade: {idade(2003)}</p>
    </>
  );
}

export default App;
