import { useUser } from "../context/UserContext.jsx";
import "../estilos/DadosGranja.css";
import ListaDados from "../componentes/ListaDados.jsx";
import { useState, useEffect } from "react";
import { database } from "../firebase/FirebaseConfig.js";
import { ref, onValue, update } from "firebase/database";
import { getAuth, signOut } from "firebase/auth";

function DadosGranja() {
  const { setUser } = useUser();
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [estadoLuz, setEstadoLuz] = useState(false);
  const dadosRef = ref(database, "/dados");


  useEffect(() => {
    
    const unsubscribe = onValue(dadosRef, (snapshot) => {
      if (snapshot.exists()) {
        setDados(snapshot.val());
        setEstadoLuz(snapshot.val().estadoLuz);
        setLoading(false);
      } else {
        console.log("Nenhum dado encontrado");
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []); 

   const gerecEstLuz = async (e) => {
     e.preventDefault();
     try {
       const novoEstadoLuz = !estadoLuz; 
      setEstadoLuz(novoEstadoLuz);
      await update(dadosRef, { estadoLuz: novoEstadoLuz });
     } catch {
       console.error("Erro em atualziar o usuario")
     }
     
   };

  function logout() {
    const auth = getAuth();
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
        <ListaDados
          dados={dados}
          logout={logout}
          gerecEstLuz={gerecEstLuz}
          estadoLuz={estadoLuz}
        />
      )}
    </div>
  );
}

export default DadosGranja;
