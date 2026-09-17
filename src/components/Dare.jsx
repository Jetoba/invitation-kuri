import { useRef, useState } from "react";
import useInView from "../hooks/useInView.js";

const WHATSAPP_PHONE = import.meta.env.VITE_WHATSAPP_PHONE;
const WHATSAPP_TEXT = "¡Sí, sí quiero! ✦";

export default function Dare() {
  const stageRef = useRef(null);
  const noBtnRef = useRef(null);
  const [noBtnPos, setNoBtnPos] = useState(null);
  const [inViewRef, inView] = useInView();

  function dodgeNoBtn() {
    const stageRect = stageRef.current.getBoundingClientRect();
    const btnRect = noBtnRef.current.getBoundingClientRect();
    const maxX = Math.max(stageRect.width - btnRect.width, 0);
    const maxY = Math.max(stageRect.height - btnRect.height, 0);
    setNoBtnPos({
      left: Math.random() * maxX,
      top: Math.random() * maxY,
    });
  }

  return (
    <section id="dare" className="dare">
      <div className="wrap">
        <h2 className="section-title">¿Te atreves?</h2>
        <div
          className={`dare-stage scroll-fade ${inView ? "in-view" : ""}`}
          id="dareStage"
          ref={(node) => {
            stageRef.current = node;
            inViewRef.current = node;
          }}
        >
          <a
            className="btn"
            id="yesBtn"
            href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_TEXT)}`}
            target="_blank"
            rel="noopener"
          >
            Sí
          </a>
          <button
            className="btn"
            id="noBtn"
            type="button"
            ref={noBtnRef}
            onMouseEnter={dodgeNoBtn}
            onTouchStart={(e) => {
              e.preventDefault();
              dodgeNoBtn();
            }}
            onFocus={dodgeNoBtn}
            style={
              noBtnPos
                ? { position: "absolute", left: noBtnPos.left, top: noBtnPos.top }
                : undefined
            }
          >
            No
          </button>
        </div>
      </div>
    </section>
  );
}
