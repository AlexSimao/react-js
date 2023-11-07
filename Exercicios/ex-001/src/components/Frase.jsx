import styles, { fraseContainer, fraseContent } from "./Frase.module.css";

function Frase() {
  return (
    <div className={fraseContainer}>
      <p className={fraseContent}>Frase de Conteudo.</p>
    </div>
  );
}

export default Frase;
