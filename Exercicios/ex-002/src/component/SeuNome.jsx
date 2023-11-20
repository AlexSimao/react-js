function SeuNome({ setNome }) {
  return (
    <>
      <h2>State Lift</h2>
      <input
        type="text"
        onChange={(e) => setNome(e.target.value)}
        placeholder="Seu nome"
      />
    </>
  );
}

export default SeuNome;
