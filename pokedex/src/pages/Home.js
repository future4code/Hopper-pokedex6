import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../global/GlobalStateContext";
import Header from "../components/Header/Header";
import {Container, GlobalStyle} from "./styled"
import PokeCard from "../components/PokeCard/PokeCard";


const Home = () => {
  const states = useContext(GlobalStateContext);
  const navigate = useNavigate();

  const addPokemon = (pokemon) => {
       const newListPokemon = states.pokemonList.filter((poke) => {
      return poke !== pokemon;
    });
       states.setPokedex([pokemon, ...states.pokedex]);
       states.setPokemonList(newListPokemon);
  };
  const functionDetails = (pokemon) => {
    states.setPokemonDetails(pokemon);
      navigate("/details");
  };

  return (
   
    <GlobalStyle>
          <Header 
            cont={0}/>
          <Container>
    {states.pokemonList &&
      states.pokemonList.map((pokemon) => {
        return (
          <PokeCard
            id={pokemon.id}
            nome={pokemon.name}
            img={(`https://professorlotus.com/Sprites/${pokemon.name}.gif`)}
            add={() => {
              addPokemon(pokemon);
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

export default Home;