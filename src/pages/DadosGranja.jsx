import { useUser } from "../context/UserContext.jsx";
import "../estilos/App.css";
import ListaDados from "../componentes/ListaDados.jsx";
import { useState, useEffect } from "react";
import { database } from "../firebase/FirebaseConfig.js"; // Banco de dados importado corretamente
import { ref, onValue } from "firebase/database"; // A importação correta do Firebase Database

function DadosGranja() {
  const { user } = useUser();
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    // Referência ao banco de dados Firebase para ler os dados
    const dadosRef = ref(database, "/dados");

    // Escutando os dados em tempo real
    const unsubscribe = onValue(dadosRef, (snapshot) => {
      if (snapshot.exists()) {
        // Verifique se os dados existem
        setDados(snapshot.val());
        setLoading(false);
      } else {
        console.log("Nenhum dado encontrado");
        setLoading(false);
      }
    });

    // Limpeza do listener
    return () => unsubscribe();
  }, [user]); // O efeito roda sempre que o usuário mudar

  return (
    <div>{loading ? <p>Carregando...</p> : <ListaDados dados={dados} />}</div>
  );
}

export default DadosGranja;
