import { useRef, useState } from "react";

const PASSWORD = "llave";

export default function Hero({ onOpen, opened }) {
  const [showForm, setShowForm] = useState(false);
  const [chars, setChars] = useState(Array(PASSWORD.length).fill(""));
  const [error, setError] = useState(false);
  const inputsRef = useRef([]);

  function handleButtonClick() {
    if (opened) return;
    setShowForm(true);
  }

  function handleCharChange(index, raw) {
    const letter = raw.slice(-1);
    setChars((prev) => {
      const next = [...prev];
      next[index] = letter;
      return next;
    });
    if (error) setError(false);
    if (letter && index < PASSWORD.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(index, e) {
    if (e.key === "Backspace" && !chars[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (chars.join("").trim().toLowerCase() === PASSWORD) {
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
            <div className="password-pin">
              {chars.map((char, index) => (
                <input
                  key={index}
                  ref={(el) => (inputsRef.current[index] = el)}
                  type="password"
                  inputMode="text"
                  maxLength={1}
                  className="password-pin-cell"
                  value={char}
                  onChange={(e) => handleCharChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  autoFocus={index === 0}
                />
              ))}
            </div>
            <button className="btn password-submit" type="submit">
              Confirmar ✦
            </button>
            {error && <div className="password-error">Llave incorrecta. Inténtalo de nuevo.</div>}
          </form>
        )}
      </div>
    </header>
  );
}
