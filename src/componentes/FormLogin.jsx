import { useState } from "react";
import logoGranja from "../assets/granja_logo_150x150.png";
import { Eye, EyeOff } from "lucide-react";

function FormLogin({ email, setEmail, passaword, setPassaword, handleLogin }) {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <div id="conteiner_login">
      <figure>
        <img src={logoGranja} alt="logo_granja" />
      </figure>

      <form onSubmit={handleLogin}>
        <label>Login</label>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div id="conteiner_input_senha">
          <input
            type={mostrarSenha ? "text" : "password"}
            placeholder="Digite a sua senha"
            value={passaword}
            onChange={(e) => setPassaword(e.target.value)}
            id="input_senha"
          />
          <button
            type="button"
            id="btn_senha"
            onClick={() => setMostrarSenha(!mostrarSenha)}
          >
            {mostrarSenha ? <Eye />: <EyeOff />}
          </button>
        </div>

        <button className="button_generic" type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default FormLogin;
