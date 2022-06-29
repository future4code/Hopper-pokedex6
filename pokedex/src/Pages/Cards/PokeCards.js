import styled from "styled-components";

const CardGeral = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const CardPokemon = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    align-items: center;
    button {
        width: 7rem;
        height: 2rem;
      }
 `

export const PokeCards = () => {

    return (
        <CardGeral >

            <CardPokemon>
                <img src={'https://pm1.narvii.com/6410/49b970957fa0c0cdd0e63af75fdca61e94b583f7_hq.jpg'} alt="pokemon" />
                <p>Pikachu</p>
                <span>
                    <button>Adicionar</button>
                    <button>Detalhes</button>
                </span>
            </CardPokemon>

            <CardPokemon>
                <img src={'https://pm1.narvii.com/6410/49b970957fa0c0cdd0e63af75fdca61e94b583f7_hq.jpg'} alt="pokemon" />
                <p>Pikachu</p>
                <span>
                    <button>Adicionar</button>
                    <button>Detalhes</button>
                </span>
            </CardPokemon>
            
            <CardPokemon>
                <img src={'https://pm1.narvii.com/6410/49b970957fa0c0cdd0e63af75fdca61e94b583f7_hq.jpg'} alt="pokemon" />
                <p>Pikachu</p>
                <span>
                    <button>Adicionar</button>
                    <button>Detalhes</button>
                </span>
            </CardPokemon>

            <CardPokemon>
                <img src={'https://pm1.narvii.com/6410/49b970957fa0c0cdd0e63af75fdca61e94b583f7_hq.jpg'} alt="pokemon" />
                <p>Pikachu</p>
                <span>
                    <button>Adicionar</button>
                    <button>Detalhes</button>
                </span>
            </CardPokemon>



        </CardGeral>
    )
}