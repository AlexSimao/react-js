function Titulo(props) {
  const nome = "Alex Simão";
  const myImg = "https://github.com/AlexSimao.png";
  const viteImg = "vite.svg";
  const reactImg = "./src/assets/react.svg";
  
  return (
    <div>
      <h1 style={{color: props.cor}}>Oi, eu sou {nome}</h1>
      <img width={100} src={myImg} alt="" />
      <img width={100} src={viteImg} alt="" />
      <img width={100} src={reactImg} alt="" />
    </div>
  );
}

export default Titulo;
