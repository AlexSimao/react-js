import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./component/NavBar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <h2>Footer</h2>
    </>
  );
}

export default App;
