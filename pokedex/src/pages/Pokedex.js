import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PokeCard from "../components/PokeCard/PokeCard";
import GlobalStateContext from "../global/GlobalStateContext";
import Header from "../components/Header/Header";
import {PokeContainer, Container, GlobalStyle} from "./styledPokedex"

const Pokedex = () => {
  const states = useContext(GlobalStateContext);
  const navigate = useNavigate();

  const removePokemon = (pokemon) => {
    const newListPokemon = states.pokedex.filter((poke) => {
      return poke !== pokemon;
    });
    //envia de volta o poke para a home
    states.setPokemonList([pokemon, ...states.pokemonList]);
    //retira da pokedex
    states.setPokedex(newListPokemon);
  };

  const functionDetails = (pokemon) => {
    states.setPokemonDetails(pokemon);
    navigate("/details");
  };

  return (
    <PokeContainer>
       <GlobalStyle />
       <Header 
       pokedex={"POKEDEX"}
       cont={1}/>
      
      {states.pokedex &&
        states.pokedex.map((pokemon) => {
          return (
            <PokeCard
              id={pokemon.id}
              nome={pokemon.name}
              img={pokemon.sprites.front_default}
              remove={() => {
                removePokemon(pokemon);
              }}
              details={() => {
                functionDetails(pokemon);
              }}
            />
          );
        })}
    </PokeContainer>
  );
};

export default Pokedex;