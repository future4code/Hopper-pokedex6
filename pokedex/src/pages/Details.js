import React, { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../global/GlobalStateContext";


const Details = () => {
  const states = useContext(GlobalStateContext);
  const navigate = useNavigate();

  const nomeDoPokemon = states.pokemonDetails.name;

  return (
    <div>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/pokedex")}>Pokedex</button>
      <h1>DETALHES</h1>
      
      <p>{states.pokemonDetails.name}</p>
      <img src={(`https://professorlotus.com/Sprites/${nomeDoPokemon}.gif`)}></img>
      {/* <img src={states.pokemonDetails.sprites.front_default}></img>
      <img src={states.pokemonDetails.sprites.back_default}></img> */}

      <h2>Status</h2>
      {states.pokemonDetails.status.map((stats) => {
        return(
          <p key={stats.stat.url}>{stats.stat.name}: {stats.base_stat}</p>
        )
      })}

      <h2>Tipos</h2>
      {states.pokemonDetails.types.map((tipo) => {
        return(
          <p key={tipo.slot}>{tipo.type.name}</p>
        )
      })}

      <h2>Ataques</h2>
      {states.pokemonDetails.moves.filter((item, index) => index < 6).map((attack) => {
        return(
          <p key={attack.move.url}>{attack.move.name}</p>
        )
      })}

    </div>
  );
};

export default Details;