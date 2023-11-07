import ListItem from "./ListItem";

function List() {
  return (
    <>
      <ul>
        <ListItem
          marca="Ferrari"
          ano_lancamento="2000"
        />
        <ListItem
          marca="Fiat"
          ano_lancamento="2000"
        />
        <ListItem
          marca="Renault"
          ano_lancamento="2000"
        />
      </ul>
    </>
  );
}

export default List;
