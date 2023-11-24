import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./component/NavBar";
import { FaGithub, FaFacebook, FaDiscord } from "react-icons/fa";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <h2>Footer</h2>
      <FaGithub />
      <FaFacebook />
      <FaDiscord />
    </>
  );
}

export default App;
