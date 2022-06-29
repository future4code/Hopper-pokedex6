import React from 'react';
import { useNavigate } from "react-router-dom";
import {PokeCardRemove} from "../Components/PokeCardRemove"
import { Header } from '../Components/Header';


const Pokedex = () => {

  const navigate = useNavigate();

  return(
    <div>
      <Header 
      pokedex={"Pokedex"}
      cont={1}/>
        
        <PokeCardRemove />
        
    </div>
  );
}

export default Pokedex;