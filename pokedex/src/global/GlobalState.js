import { useEffect, useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import axios from "axios";

const GlobalState = (props) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const states = {
    pokemonList,
    setPokemonList,
    pokemonDetails,
    setPokemonDetails,
    pokedex,
    setPokedex
  };

  console.log(pokemonList)
  console.log(pokemonDetails)

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    const newList = [];
    //num de requisiçoes de acordo com a qtd de poke desejados
    for (let i = 1; i < 21; i++) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        .then((response) => {
          newList[i - 1] = {
            id: response.data.id,
            name: response.data.name,
            status: response.data.stats,
            moves: response.data.moves,
            types: response.data.types,
            sprites: response.data.sprites
          };
          //condição para o envio da lista
          //se estiver do tamanho que desejar vai para o state
          if (newList.length === 20) {
            setPokemonList(newList);
          }
        })
        .catch((err) => {
          console.log(err.data);
        });
    }
  };



  return (
    <div>
        <GlobalStateContext.Provider value={states}>
        {props.children}
      </GlobalStateContext.Provider>
    </div>
  );
};

export default GlobalState;