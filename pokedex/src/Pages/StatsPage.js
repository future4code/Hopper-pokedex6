import React from 'react';
import { useNavigate } from "react-router-dom";


const Stats = () => {

  const navigate = useNavigate();

  return(
    <div>
        <h1>Stats</h1>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/pokedex")}>Pokedex</button>
    </div>
  );
}

export default Stats;