import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import GlobalStateContext from "../global/GlobalStateContext";

const Details = () => {
  const states = useContext(GlobalStateContext);
  const {pokemonDetails} = states
    const navigate = useNavigate();



  return (
    <div>
      <Header 
      details={"Detalhes"} 
       cont={2} />
      
        {/* <div>
          <img src={pokemonDetails.sprits.front_default} alt=""  />
          <img src={pokemonDetails.sprits.front_default} alt="" />
        </div>
        <h4>HP</h4>
        <h4>Attack {pokemonDetails.stats}</h4>
        <h4>Defense</h4>
        <h4>Special-Attack</h4>
        <h4>Special-Defense</h4>
        <h4>Speed</h4>
        <div> */}

        {/* </div> */}

    </div>
  );
};

export default Details;