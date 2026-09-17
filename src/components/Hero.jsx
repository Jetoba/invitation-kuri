export default function Hero({ onOpen, opened }) {
  return (
    <header className="hero">
      <div className="gear g1"></div>
      <div className="gear g2"></div>
      <div className="gear g3"></div>
      <div className="wrap hero-inner">
        <div className="eyebrow">Documento reservado · Expediente Nº 01</div>
        <div className="subtitle">Hay puertas que aún no se han abierto</div>
        <div className="ornament"></div>
        <p className="tagline">
          Hay cosas que no podemos saber antes de vivirlas.
          <br />
          Solo podemos decidir si nos atrevemos a descubrir qué hay al otro lado.
        </p>
        <button className="btn" type="button" onClick={onOpen} disabled={opened}>
          {opened ? "Expediente abierto ✦" : "Abrir expediente ✦"}
        </button>
      </div>
    </header>
  );
}
