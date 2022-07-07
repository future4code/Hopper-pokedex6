import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const DivButtons = styled.div`
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  margin: auto;
  font-weight: lighter;
  width: 60%;
`;
const DivCard = styled.div`
  display: flex;
  width: 300px;
  height: 300px;
  background-color: #e8f0f4;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  margin-top: 10px;
  border-radius: 30px;
`;

function PokeCard(props) {
  const navigate = useNavigate();

  return (
    <DivCard id={props.id}>
      <p>{props.nome}</p>
      <Image src={props.img}></Image>
      <DivButtons>
        {navigate === "/pokedex" ? (
          <button onClick={props.remove}>Remover</button>
        ) : (
          <button onClick={props.add}>Adicionar</button>
        )}
        <button onClick={props.details}>Ver Detalhes</button>
      </DivButtons>
    </DivCard>
  );
}

export default PokeCard;
