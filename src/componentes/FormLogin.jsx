import logoGranja from "../assets/granja_logo_150x150.png";

function FormLogin({ email, setEmail, passaword, setPassaword, handleLogin }) {
  return (
    <div id="conteiner_login">
      <figure><img src={logoGranja} alt="logo_granja" /></figure>

      <form onSubmit={handleLogin}>
        <label>Login</label>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="passaword"
          placeholder="Digite a sua senha"
          value={passaword}
          onChange={(e) => setPassaword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default FormLogin;
