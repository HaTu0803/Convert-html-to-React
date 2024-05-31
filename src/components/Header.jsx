import STYLE from "./Style";
export const Header = ({ title }) => {
  return (
    <header style={STYLE.header}>
      <h2>{title}</h2>
    </header>
  );
};
