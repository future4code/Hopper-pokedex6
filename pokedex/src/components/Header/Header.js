import React from "react";
import { useNavigate } from "react-router-dom";
import { DivHeader, Botao } from "./styled";
import { goToHome, goToPokedex, goToDetails } from "../../router/RouteFunctions";

const Header = (props) => {
  const navigate = useNavigate();

  const botao = (cont) => {
    switch (cont) {
      case 0:
        return <div>
          <div>
            <button onClick={() => goToPokedex(navigate)}>
              Pokedex
            </button>
          </div>
          <h1>{props.home}</h1>
        </div>;
      case 1:
        return <div>
          <div>
            <button onClick={() => goToHome(navigate)}>
              Home
            </button>
            </div>
          <h1>{props.pokedex}</h1>
        </div>;
      case 2:
        return <div>
          <div>
            <button onClick={() => goToHome(navigate)}>
              Home
            </button>
            <button onClick={() => goToPokedex(navigate)}>
              Pokedex
            </button>
          </div>
          <h1>{props.details}</h1>
        </div>;
    }
  }

  return (
    <DivHeader>
      <img src="https://pokedex.sleduardo.dev/img/logo.svg" alt="" />
      {botao(props.cont)}

    </DivHeader>
  );

}
export default Header;