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
            <Botao onClick={() => goToPokedex(navigate)}>
              Pokedex
            </Botao>
          </div>
          <h1>{props.home}</h1>
        </div>;
      case 1:
        return <div>
          <div>
            <Botao onClick={() => goToHome(navigate)}>
              Home
            </Botao>
            </div>
          <h1>{props.pokedex}</h1>
        </div>;
      case 2:
        return <div>
          <div>
            <Botao onClick={() => goToHome(navigate)}>
              Home
            </Botao>
            <Botao onClick={() => goToPokedex(navigate)}>
              Pokedex
            </Botao>
          </div>
          <h1>{props.details}</h1>
        </div>;
    }
  }

  return (
    <DivHeader>
      {botao(props.cont)}
      <img src="https://pokedex.sleduardo.dev/img/logo.svg" alt="" />
      

    </DivHeader>
  );

}
export default Header;