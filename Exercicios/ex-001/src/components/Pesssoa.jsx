function Pessoa({ nome, idade, foto }) {
  return (
    <div>
      <h2>Bem-vindo: {nome} </h2>
      <img
        width={150}
        src={foto}
        alt={"Imagem de " + nome}
      />
      <p>Idade: {idade}</p>
    </div>
  );
}

export default Pessoa;
