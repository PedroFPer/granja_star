import { useUser } from "../context/UserContext.jsx";
import "../estilos/DadosGranja.css";
import ListaDados from "../componentes/ListaDados.jsx";
import { useState, useEffect } from "react";
import { database } from "../firebase/FirebaseConfig.js";
import { ref, onValue } from "firebase/database";
import { getAuth, signOut } from "firebase/auth";

function DadosGranja() {
  const { user, setUser } = useUser();
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(true); 


  useEffect(() => {
    const dadosRef = ref(database, "/dados");

    const unsubscribe = onValue(dadosRef, (snapshot) => {
      if (snapshot.exists()) {
        setDados(snapshot.val());
        setLoading(false);
      } else {
        console.log("Nenhum dado encontrado");
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []); 

  function logout() {
    const auth = getAuth();

    // Deslogando o usuário do Firebase
    signOut(auth)
      .then(() => {
        console.log("Usuário deslogado com sucesso do Firebase");
        setUser(null); // Limpa o estado no contexto
      })
      .catch((error) => {
        console.error("Erro ao deslogar do Firebase:", error);
      });
  }

  return (
    <div className="conteiner_principal">
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ListaDados dados={dados} logout={logout} />
      )}
    </div>
  );
}

export default DadosGranja;
