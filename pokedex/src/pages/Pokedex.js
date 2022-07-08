import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PokeCard from "../components/PokeCard";
import GlobalStateContext from "../global/GlobalStateContext";


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
    //envia para pág de detalhes
    states.setPokemonDetails(pokemon);
    //troca de pág
    navigate("/details");
  };

  return (
    <div>
      <button onClick={() => navigate("/")}>Home</button>
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
    </div>
  );
};

export default Pokedex;