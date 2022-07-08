import { DivCard, BorderDiv, Image, DivButtons, ButtonAdd, ButtonDetails, ButtonRemove } from "./styled"
import Estrela from "../img/estrela.png";
import Pokebola from "../img/pokebola.png"
import PokeAberta from "../img/bolaaberta.png"

function PokeCard(props) {

  return (
    <DivCard id={props.id}>
      <BorderDiv>
        <Image src={props.img} alt={props.name}></Image>
        <h4>{props.nome}</h4>
      </BorderDiv>
      <DivButtons>
        {window.location.href.indexOf("pokedex") !== -1 ? (
          <ButtonRemove onClick={props.remove}>
            <img src={PokeAberta} alt="" />
            REMOVE
          </ButtonRemove>
        ) : (
          <ButtonAdd onClick={props.add}>
            <img src={Pokebola} alt="" />
            ADD
          </ButtonAdd>
        )}
        <ButtonDetails onClick={props.details}>
          <img src={Estrela} />
          ABOUT
        </ButtonDetails>
      </DivButtons>
    </DivCard>
  );
}

export default PokeCard;
