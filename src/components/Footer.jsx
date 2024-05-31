import STYLE from "./Style";

export const Footer = ({ text }) => {
  return (
    <footer style={STYLE.footer}>
      <p>{text}</p>
    </footer>
  );
};
