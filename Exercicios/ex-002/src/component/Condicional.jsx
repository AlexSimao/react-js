import { useState } from "react";
import Button from "./Button";

function Condicional() {
  const [email, setEmail] = useState("");
  const [userEmail, setUserEmail] = useState("");

  function btnEnviar(e) {
    e.preventDefault();
    setUserEmail(email);
  }

  function limparEmail(e) {
    setEmail("")
    setUserEmail("");
    id_email.focus()
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
          id="id_email"
        />
        <Button
          text="Enviar E-mail"
          event={btnEnviar}
        />
      </form>
      {userEmail.length > 0 && (
        <div>
          <p>O Email do Usuário e {userEmail}</p>
          <Button
            text="Limpar Email"
            event={limparEmail}
          />
        </div>
      )}
    </div>
  );
}

export default Condicional;
