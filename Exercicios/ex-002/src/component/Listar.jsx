import PropType from "prop-types";

function Listar({ lista }) {
  return (
    <>
      <h3>Lista de Itens: </h3>
      {lista.map((Item, index) => (
        <p key={index}>{Item}</p>
      ))}
    </>
  );
}

Listar.propType = {
  lista: PropType.array.isRequired,
};

export default Listar;
