import { goToPokedex } from "../Router/RouteFunctions"
import { useNavigate } from "react-router-dom"
import styled from "styled-components";
import { goToHome } from "../Router/RouteFunctions";
import { goToStats } from "../Router/RouteFunctions";

const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    button{
        margin: 1vh;
    }
`
const Botoes = styled.div`
    display: flex;
    margin-right: 2rem;        
`

export const Header = (props) => {

    const navigate = useNavigate();

    const botao = (cont) => {
        switch (cont) {
            case 0:
                return <ContainerHeader>
                    <Botoes>
                        <button onClick={() => goToPokedex(navigate)}>
                            Pokedex
                        </button>
                        <button onClick={() => goToStats(navigate)}>
                            Stats
                        </button>
                    </Botoes>
                    <h1>{props.home}</h1>
                </ContainerHeader>;
            case 1:
                return <ContainerHeader>
                    <Botoes>
                        <button onClick={() => goToHome(navigate)}>
                            Home
                        </button>
                        <button onClick={() => goToStats(navigate)}>
                            Stats
                        </button>
                    </Botoes>
                    <h1>{props.pokedex}</h1>
                </ContainerHeader>;
            case 2:
                return <ContainerHeader>
                    <Botoes>
                        <button onClick={() => goToHome(navigate)}>
                            Home
                        </button>
                        <button onClick={() => goToPokedex(navigate)}>
                            Pokedex
                        </button>
                    </Botoes>
                    <h1>{props.stats}</h1>
                </ContainerHeader>;
        }
    }

    return (
        <ContainerHeader>
            {botao(props.cont)}
        </ContainerHeader>
    )
}