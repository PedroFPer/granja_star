import logoGranja from "../assets/granja_logo_150x150.png";
import luzLigada from "../assets/ON(200 x 80 px).png";
import luzDesligada from "../assets/OFF(200 x 80 px).png";

function ListaDados({ dados, logout, gerecEstLuz,estadoLuz}) {
  return (
    <div id="conteiner_lista_dados">
      <figure>
        <img src={logoGranja} alt="logo_granja" />
      </figure>

      <section>
        <article id="conteiner_hc">
          <p>{dados ? dados.index.toFixed(2) : "Carregando..."} HC</p>
        </article>

        <article className="conteiner_gener_dados">
          <p>Temperatura:</p>
          <p>{dados ? dados.temper : "Carregando..."} C</p>
        </article>

        <article className="conteiner_gener_dados">
          <p>Umidade:</p>
          <p>{dados ? dados.umidade : "Carregando..."}%</p>
        </article>

        <article className="conteiner_gener_dados">
          <p>Estado da luz:</p>
          <button onClick={gerecEstLuz} id="btn_img">
            <figure>
              <img
                src={estadoLuz ? luzLigada : luzDesligada}
                alt={estadoLuz ? "lampadaLigada" : "lampadaDesligada"}
              />
            </figure>
          </button>
        </article>
      </section>

      <button onClick={logout}>Sair</button>
    </div>
  );
}

export default ListaDados;
