import Button from "./Button";

function Evento({ conteudo }) {
  function meuEvento() {
    alert(conteudo);
  }
  return (
    <div>
      <p>Clique para disparar um Evento.</p>
      <Button
        text="Evento"
        event={meuEvento}
      />
    </div>
  );
}

Evento.defaultProps = {
  conteudo: "Você ativou o Evento!!!",
};

export default Evento;
