import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", justifyContent: "center", gap: 15 }}>
      <Link to={"/"}>Home</Link>
      <Link to={"/contact"}>Contatos</Link>
    </nav>
  );
}

export default Navbar;
