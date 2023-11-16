import PropTypes from "prop-types";

function Listar({ array }) {
  return (
    <>
      <h3>Lista de Itens: </h3>
      {array.length >= 1 ? array.map((Item, index) => <p key={index}>{Item}</p>) : <p>A Lista esta vazia.</p>}
    </>
  );
}

Listar.propTypes = {
  array: PropTypes.array.isRequired,
};

export default Listar;
