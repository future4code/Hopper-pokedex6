import Header from "../components/Header/Header";
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../global/GlobalStateContext";

const Details = () => {
  const states = useContext(GlobalStateContext);
  const navigate = useNavigate();

  return (
    <div>

      <Header 
      details={"Detalhes"} 
       cont={2} />
            
      <p>{states.pokemonDetails.name}</p>

      <img src={states.pokemonDetails.sprites.front_default}></img>
      <img src={states.pokemonDetails.sprites.back_default}></img>

      <h2>Status</h2>
      {states.pokemonDetails.status.map((stats) => {
        return(
          <p key={stats.stat.url}>{stats.stat.name} : {stats.base_stat}</p>
        )
      })}

      <h2>Tipos</h2>
      {states.pokemonDetails.types.map((tipo) => {
        return(
          <p key={tipo.slot}>{tipo.type.name}</p>
        )
      })}

      <h2>Ataques</h2>
      {states.pokemonDetails.moves.map((attack) => {
        return(
          <p key={attack.move.url}>{attack.move.name}</p>
        )
      })}

    </div>
  );
};

export default Details;
  
      