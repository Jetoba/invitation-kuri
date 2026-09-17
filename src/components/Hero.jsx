import { useState } from "react";

const PASSWORD = "circo";

export default function Hero({ onOpen, opened }) {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  function handleButtonClick() {
    if (opened) return;
    setShowForm(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (value.trim().toLowerCase() === PASSWORD) {
      setError(false);
      onOpen();
    } else {
      setError(true);
    }
  }

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

        {!showForm && (
          <button className="btn" type="button" onClick={handleButtonClick} disabled={opened}>
            {opened ? "Expediente abierto ✦" : "Abrir expediente ✦"}
          </button>
        )}

        {showForm && !opened && (
          <form className="password-form" onSubmit={handleSubmit}>
            <input
              type="password"
              className="password-input"
              placeholder="Clave de acceso"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                if (error) setError(false);
              }}
              autoFocus
            />
            <button className="btn" type="submit">
              Confirmar ✦
            </button>
            {error && <div className="password-error">Clave incorrecta. Inténtalo de nuevo.</div>}
          </form>
        )}
      </div>
    </header>
  );
}
