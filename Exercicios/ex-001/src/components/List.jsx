import ListItem from "./ListItem";

function List() {
  const Lista_de_carros = [
    {
      marca: "Ferrari",
      ano: 1985,
    },
    {
      marca: "Fiat",
      ano: 1964,
    },
    {
      marca: "Chevrolet",
      ano: 1999,
    },
    {},
  ];

  return (
    <>
      <ul>
        {Lista_de_carros.map((item, index) => {
          return (
            <ListItem
              key={index}
              marca={item.marca}
              ano_lancamento={item.ano}
            />
          );
        })}
      </ul>
    </>
  );
}

export default List;
