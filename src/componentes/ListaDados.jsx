function ListaDados({ dados, logout }) {

  return (
    <div>
      <ul>
        <li>Index: {dados ? dados.index : "Carregando..."}</li>
        <li>Temperatura: {dados ? dados.temper : "Carregando..."}</li>
        <li>Umidade: {dados ? dados.umidade : "Carregando..."}</li>
        <li>
          Estado da luz:{" "}
          {dados ? (dados.estadoLuz ? "Ligada" : "Desligada") : "Carregando..."}
        </li>
      </ul>

      <button onClick={logout}>Sair</button>
    </div>
    
  );
}

export default ListaDados;
