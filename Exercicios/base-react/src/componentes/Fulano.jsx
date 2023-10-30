import { useState } from "react";

function Fulano(props) {
  const [texto, setTexto] = useState("Sem nome...");
  const [inputText, setInputText] = useState("");

  function clicou() {
    if (inputText == "") {
      return;
    }
    setTexto(inputText);
    setInputText("");
  }

  return (
    <div>
      <h1 style={{ color: props.cor }}>{texto}</h1>
      <input
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        type="text"
      />
      <button
        onClick={() => {
          clicou();
        }}
      >
        Mudar
      </button>
    </div>
  );
}

export default Fulano;
