import PropTypes from "prop-types";

function ListItem({ marca, ano_lancamento }) {
  return (
    <>
      <li>
        {marca} - {ano_lancamento}
      </li>
    </>
  );
}

ListItem.propTypes = {
  marca: PropTypes.string.isRequired,
  ano_lancamento: PropTypes.number,
};

ListItem.defaultProps = {
  marca: "Faltou a Marca",
  ano_lancamento: 0,
};

export default ListItem;
