import React from 'react';
import { useNavigate } from "react-router-dom";
import { Header } from '../Components/Header';


const Stats = () => {

  const navigate = useNavigate();

  return (
    <div>
      <Header
        stats={"Detalhes Pokemón"}
        cont={2} />
    </div>
  );
}

export default Stats;