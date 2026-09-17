export default function Footer({ opened }) {
  return (
    <footer className={opened ? "" : "footer-fixed"}>
      Documento reservado · Expediente Nº 01
    </footer>
  );
}
