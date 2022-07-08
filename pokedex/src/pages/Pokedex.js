import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PokeCard from "../components/PokeCard/PokeCard";
import GlobalStateContext from "../global/GlobalStateContext";
import Header from "../components/Header/Header";
import { Container, GlobalStyle } from "./styled"

const Pokedex = () => {
  const states = useContext(GlobalStateContext);
  const navigate = useNavigate();

  const removePokemon = (pokemon) => {
    const newListPokemon = states.pokedex.filter((poke) => {
      return poke !== pokemon;
    });
    states.setPokemonList([pokemon, ...states.pokemonList]);
    states.setPokedex(newListPokemon);
  };

  const functionDetails = (pokemon) => {
    states.setPokemonDetails(pokemon);
    navigate("/details");
  };

  return (

    <GlobalStyle>
      <Header
        cont={1} />
      <Container>
        {states.pokedex &&
          states.pokedex.map((pokemon) => {
            return (
              <PokeCard
                id={pokemon.id}
                nome={pokemon.name}
                img={(`https://professorlotus.com/Sprites/${pokemon.name}.gif`)}
                remove={() => {
                  removePokemon(pokemon);
                }}
                details={() => {
                  functionDetails(pokemon);
                }}
              />
            );
          })}
      </Container>
    </GlobalStyle>
  );
};

export default Pokedex;