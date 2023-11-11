import { useState } from "react";

function Form() {
  const [nome, setNome] = useState("");
  const [password, setPassword] = useState("");

  function meuForm(e) {
    e.preventDefault();
    console.log(`Usuário ${nome}, foi cadastrado com a senha ${password}`);
    setPassword("");
  }

  return (
    <div>
      <h2>Cadastrar Usuário.</h2>
      <form onSubmit={meuForm}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => {
              setNome(e.target.value);
            }}
            value={nome}
            placeholder="Seu nome."
            required
          />
        </div>
        <div>
          <label htmlFor="password">Senha: </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            placeholder="Sua senha"
            required
          />
        </div>

        <input
          type="submit"
          value="Cadastrar"
        />
      </form>
    </div>
  );
}

export default Form;
