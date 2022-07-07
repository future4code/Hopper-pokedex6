import React from "react";
import { useNavigate } from "react-router-dom";

const Details = () => {

    const navigate = useNavigate();

  return (
    <div>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/pokedex")}>Pokedex</button>
      <h1>DETALHES</h1>
    </div>
  );
};

export default Details;