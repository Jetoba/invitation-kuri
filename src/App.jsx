import { useEffect, useRef, useState } from "react";
import Hero from "./components/Hero.jsx";
import Expediente from "./components/Expediente.jsx";
import Regalo from "./components/Regalo.jsx";
import Dare from "./components/Dare.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [opened, setOpened] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const secretRef = useRef(null);

  function handleOpen() {
    setOpened(true);
  }

  useEffect(() => {
    if (!opened) return;
    const id = requestAnimationFrame(() => {
      setRevealed(true);
      secretRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => cancelAnimationFrame(id);
  }, [opened]);

  const secretClass = ["secret", opened ? "" : "hidden", revealed ? "revealed" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <Hero onOpen={handleOpen} opened={opened} />

      <main id="secretContent" className={secretClass} ref={secretRef}>
        <Expediente />
        <Regalo />
        <Dare />
      </main>

      <Footer opened={opened} />
    </>
  );
}
