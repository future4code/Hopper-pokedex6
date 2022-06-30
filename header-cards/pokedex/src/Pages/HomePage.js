import React from 'react';
import { useNavigate } from "react-router-dom";
import { Header } from '../Components/Header';
import { PokeCardAdd } from '../Components/PokeCardAdd'


const Home = () => {

  const navigate = useNavigate();

  return(
    <div>
      <Header 
      home={"Home Page"}
      cont={0}/>

        <PokeCardAdd/>
    </div>
  );
}

export default Home;