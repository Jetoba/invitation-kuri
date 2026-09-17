import ScrollReveal from "./ScrollReveal.jsx";

export default function Regalo() {
  return (
    <section id="regalo">
      <div className="wrap">
        <h2 className="section-title">La pieza extraordinaria</h2>
        <p className="section-sub">El objeto ha sido identificado. El resto debe descubrirse en persona.</p>
        <div className="ticket-stage">
          <ScrollReveal className="ticket-image-frame">
            <img
              id="ticketImage"
              alt="Entrada para dos inspirada en KURIOS"
              src={`${import.meta.env.BASE_URL}ticket.jpg`}
              width="1600"
              height="667"
              loading="lazy"
              decoding="async"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
