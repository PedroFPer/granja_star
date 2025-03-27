import './estilos/App.css'
import FormLogin from './componentes/FormLogin'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './context/UserContext.jsx'
import { signInWithEmailAndPassword } from 'firebase/auth/cordova';
import {auth} from './firebase/FirebaseConfig.js'


function App() {
  const { setUser } = useUser();
  const [ email,setEmail ] = useState("");
  const [ passaword, setPassaword] = useState("");
  const [ error, setError ] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredencial = await signInWithEmailAndPassword(
        auth,
        email,
        passaword
      );

      const user = userCredencial.user;
      setUser(user);

      navigate("/granja_star/dados");
    } catch (error) {
      setError("Erro em fazer o login. Verifique suas credenciais")
    }
  };

  return (
    <>
      <div className="conteiner_principal">
        <h1>Login Granja Star</h1>

        <FormLogin
          email={email}
          setEmail={setEmail}
          passaword={passaword}
          setPassaword={setPassaword}
          handleLogin={handleLogin}
        />

        {error && <p>{error}</p>}
      </div>
    </>
  );
}

export default App
