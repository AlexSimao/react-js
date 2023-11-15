import { useState } from "react";
import Button from "./Button";

function Condicional() {
  const [email, setEmail] = useState("");
  const [userEmail, setUserEmail] = useState("");

  function btnEnviar(e) {
    e.preventDefault();
    setUserEmail(email);
  }

  return (
    <div>
      <h2>Cadastre seu E-mail:</h2>
      <form>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          name="email"
          id="email"
        />
        <Button
          text="Enviar E-mail"
          event={btnEnviar}
        />
      </form>
      {userEmail.length > 0 && (
        <div>
          <p>O Email do Usuário e {userEmail}</p>
        </div>
      )}
    </div>
  );
}

export default Condicional;
