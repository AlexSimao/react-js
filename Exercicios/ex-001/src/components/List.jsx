import ListItem from "./ListItem";

function List() {
  return (
    <>
      <ul>
        <ListItem
          marca="Ferrari"
          ano_lancamento={1985}
        />
        <ListItem
          marca="Fiat"
          ano_lancamento={1964}
        />
        <ListItem
          marca="Chevrolet"
          ano_lancamento={1999}
        />
        <ListItem />
      </ul>
    </>
  );
}

export default List;
