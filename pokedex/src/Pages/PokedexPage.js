import React from 'react';
import { useNavigate } from "react-router-dom";


const Pokedex = () => {

  const navigate = useNavigate();

  return(
    <div>
        <h1>Pokedex</h1>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/stats")}>Stats</button>
    </div>
  );
}

export default Pokedex;