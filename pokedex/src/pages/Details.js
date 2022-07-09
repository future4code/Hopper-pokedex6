import Header from "../components/Header/Header";
import React from "react";
import GlobalStateContext from "../global/GlobalStateContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ImagensCard, GlobalStyle, ContainerGeral, ContainerImages, ContainerDiv } from "./styledDetails"

const Details = () => {
  const states = useContext(GlobalStateContext);
  const nomeDoPokemon = states.pokemonDetails.name;
  const idDoPokemon = states.pokemonDetails.id;

  return (

    <GlobalStyle>
      <Header
        cont={2} />

      <h2>{states.pokemonDetails.name.toUpperCase()}</h2>

      <ContainerGeral>

        <ContainerImages>

          <ImagensCard>
             <img src={(`https://professorlotus.com/Sprites/${nomeDoPokemon}.gif`)}></img>
          </ImagensCard>

          <ImagensCard>
            {states.pokemonDetails.id < 10 ?
              <img src={(`https://www.pokencyclopedia.info/sprites/3ds/ani-b_6/3a-b__00${idDoPokemon}__xy.gif`)} />
              :
              <img src={(`https://www.pokencyclopedia.info/sprites/3ds/ani-b_6/3a-b__0${idDoPokemon}__xy.gif`)} />
            }
          </ImagensCard>

        </ContainerImages>

        <ContainerDiv>
          <h2>Status</h2>
          {states.pokemonDetails.status.map((stats) => {
            return (
              <p key={stats.stat.url}>{stats.stat.name} : {stats.base_stat}</p>
            )
          })}
        </ContainerDiv>
        <ContainerDiv>
          <h2>Tipos</h2>
          {states.pokemonDetails.types.map((tipo) => {
            return (
              <p key={tipo.slot}>{tipo.type.name}</p>
            )
          })}
        </ContainerDiv>

        <ContainerDiv>
          <h2>Ataques</h2>
          {states.pokemonDetails.moves.filter((item, index) => index < 6).map((attack) => {
            return (
              <p key={attack.move.url}>{attack.move.name}</p>
            )
          })}
        </ContainerDiv>
      </ContainerGeral>
    </GlobalStyle >

  );
};

export default Details;

