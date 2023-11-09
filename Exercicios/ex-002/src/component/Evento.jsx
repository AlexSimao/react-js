function Evento({conteudo}) {
  function meuEvento() {
    alert(conteudo);
  }
  return (
    <div>
      <p>Clique para disparar um Evento.</p>
      <button onClick={meuEvento}>Evento</button>
    </div>
  );
}

Evento.defaultProps = {
  conteudo: "Você ativou o Evento!!!"
}

export default Evento;
