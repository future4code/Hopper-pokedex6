import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../global/GlobalStateContext";

import PokeCard from "../components/PokeCard";

const Home = () => {
  const states = useContext(GlobalStateContext);
  const navigate = useNavigate();

  //add pokemons na pokedex através do estado global
  const addPokemon = (pokemon) => {
    //filtra o pokemon selecionado
    const newListPokemon = states.pokemonList.filter((poke) => {
      return poke !== pokemon;
    });
    //envia o pokemon para a pokedex
    states.setPokedex([pokemon, ...states.pokedex]);
    //retira da lista na homePage
    states.setPokemonList(newListPokemon);
  };
  const functionDetails = (pokemon) => {
    //envia o pokemon para a pág de detalhes
    states.setPokemonDetails(pokemon);
    //muda para a pág de detalhes
    navigate("/details");
  };

  const removePokemon = (pokemon) => {
    const newListPokemon = states.pokedex.filter((poke) => {
      return poke !== pokemon;
    });
    //envia de volta o poke para a home
    states.setPokemonList([pokemon, ...states.pokemonList]);
    //retira da pokedex
    states.setPokedex(newListPokemon);
  };

 

  return (
    <div>
        <button onClick={() => navigate("/pokedex")}>Pokedex</button>
    
      {states.pokemonList &&
        states.pokemonList.map((pokemon) => {
          return (
            <PokeCard 
              id={pokemon.id}
              nome={pokemon.name}
              img={pokemon.sprites.front_default}
              add={() => {
                addPokemon(pokemon);
              }}
              details={() => {
                functionDetails(pokemon);
              }}
            />
          );
        })}



        {/* <div>
            <h1>Pokedex</h1>
        {console.log(states.pokedex)}
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
            />

          );
        })}
        </div> */}

    </div>
  );
};

export default Home;