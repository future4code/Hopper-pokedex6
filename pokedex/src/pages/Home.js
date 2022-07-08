import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../global/GlobalStateContext";
import Header from "../components/Header/Header";
import {Container, GlobalStyle} from "./styled"
import PokeCard from "../components/PokeCard/PokeCard";


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
    states.setPokemonDetails(pokemon);
      navigate("/details");
  };

  return (
   
    <GlobalStyle>
          <Header 
          home={"HOME"}
          cont={0}/>
          <Container>
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
      </Container>
      </GlobalStyle>
);
};

export default Home;