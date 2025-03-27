import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext.jsx";
import { Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function ProtectedRouteLogin({ children }) {
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(true); // Começa com loading como true

  useEffect(() => {
    // Verificar estado de autenticação com Firebase
    const auth = getAuth();

    // Função que será chamada quando o estado de autenticação mudar
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // Se o usuário estiver autenticado, armazene no contexto
        setUser(firebaseUser);
      } else {
        // Caso contrário, defina o usuário como null
        setUser(null);
      }
      setLoading(false); // Depois que a verificação estiver completa, desativa o loading
    });

    return () => unsubscribe(); // Limpa o listener quando o componente for desmontado
  }, [setUser]); // Re-executa o useEffect se o setUser mudar

  if (loading) {
    return <div>Carregando...</div>; // Exibe "Carregando..." durante o loading
  }

  if (user) {
    // Se o usuário estiver logado, redireciona para a página de dados
    return <Navigate to="/granja_star/dados" />;
  }

  // Se não estiver logado, renderiza a tela de login
  return children;
}

export default ProtectedRouteLogin;
