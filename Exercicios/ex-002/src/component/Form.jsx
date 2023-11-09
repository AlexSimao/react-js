function Form() {
  function meuForm(e) {
    e.preventDefault();
    console.log("Usuário Cadastrado");
  }

  return (
    <div>
      <h2>Cadastrar Usuário.</h2>
      <form onSubmit={meuForm}>
        <input
          type="text"
          placeholder="Seu nome."
        />
        <br />
        <input
          type="submit"
          value="Cadastrar"
        />
      </form>
    </div>
  );
}

export default Form;
