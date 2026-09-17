import ScrollReveal from "./ScrollReveal.jsx";

export default function Expediente() {
  return (
    <section id="expediente">
      <div className="wrap">
        <h2 className="section-title">Expediente Nº 01</h2>
        <p className="section-sub">Documento reservado · Expediente abierto.</p>

        <ScrollReveal className="parchment">
          <div className="smallcaps">Clasificación · Extraordinario</div>
          <div className="name">Sandy,</div>
          <div className="bodycopy">
            <p>Se ha encontrado un objeto que, según todos los registros conocidos, no debería existir.</p>

            <p>
              No puede medirse.
              <br />
              No puede explicarse.
              <br />
              Y, curiosamente, parece tener valor únicamente cuando se comparte.
            </p>

            <p>Tras varias investigaciones, hemos descubierto su verdadera naturaleza:</p>

            <p>
              <strong>Una puerta hacia un mundo donde lo imposible es posible.</strong>
            </p>

            <p>
              🎪 Destino: KURIOS
              <br />
              🕵️ Sujetos autorizados: 2
              <br />
              🗝️ Acceso: Concedido
            </p>

            <p>
              <strong></strong>
            </p>

            <p style={{ marginTop: 34 }}>
              <em>Nos vemos al otro lado de la puerta.</em>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
