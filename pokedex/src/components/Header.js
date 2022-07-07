import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
  };

  return (
    <div>
      {navigate === "/" && (
        <button onClick={() => goToPage("/pokedex")}>ir para pokedex</button>
      )}
      {navigate === "/pokedex" && (
        <button onClick={() => goToPage("/")}>voltar</button>
      )}
      {navigate === "/details" && (
        <button onClick={() => goToPage("/pokedex")}>ir para pokedex</button>
      )}
    </div>
  );
};

export default Header;