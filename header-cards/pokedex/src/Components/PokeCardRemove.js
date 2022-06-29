import styled from "styled-components";

const CardGeral = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    row-gap: 2rem;
    column-gap: 2rem;
    flex-wrap: wrap;
    margin: 2rem;
`

const CardPokemon = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    align-items: center;
    button {
        width: 7rem;
        height: 2rem;
        margin: 0.5rem;
      }
    img {
        max-height: 25vh;
        width: auto;
        margin: 1rem;
    }  
 `

export const PokeCardRemove = () => {

    return (
        <CardGeral >

            <CardPokemon>
                <img src={'https://pm1.narvii.com/6410/49b970957fa0c0cdd0e63af75fdca61e94b583f7_hq.jpg'} alt="Pikachu" />
                <p><strong>Pikachu</strong></p>
                <span>
                    <button>Remover</button>
                    <button>Detalhes</button>
                </span>
            </CardPokemon>

            <CardPokemon>
                <img src={'https://i.pinimg.com/600x315/5c/a4/67/5ca46751512f5ab01e35bd76627ff591.jpg'} alt="Squirtle" />
                <p><strong>Squirtle</strong></p>
                <span>
                    <button>Remover</button>
                    <button>Detalhes</button>
                </span>
            </CardPokemon>

            <CardPokemon>
                <img src={'https://sm.ign.com/ign_br/screenshot/default/pokemon-6dceb804_6vgb.jpg'} alt="Charmander" />
                <p><strong>Charmander</strong></p>
                <span>
                    <button>Remover</button>
                    <button>Detalhes</button>
                </span>
            </CardPokemon>

            <CardPokemon>
                <img src={'https://sucodemanga.com.br/wp-content/uploads/2022/03/Sprigatito-pokemon.jpg'} alt="Sprigatito" />
                <p><strong>Sprigatito</strong></p>
                <span>
                    <button>Remover</button>
                    <button>Detalhes</button>
                </span>
            </CardPokemon>

            <CardPokemon>
                <img src={'https://claudia.abril.com.br/wp-content/uploads/2020/01/pokemons-do-pokemon-go_6.jpg?quality=70&strip=all'} alt="Psyduck" />
                <p><strong>Psyduck</strong></p>
                <span>
                    <button>Remover</button>
                    <button>Detalhes</button>
                </span>
            </CardPokemon>

            <CardPokemon>
                <img src={'https://i.pinimg.com/474x/64/a4/50/64a450e2f6aa222ef7dcf7dc057c4a66--vinyl-decals-sticker.jpg'} alt="Bulbassauro" />
                <p><strong>Bulbassauro</strong></p>
                <span>
                    <button>Remover</button>
                    <button>Detalhes</button>
                </span>
            </CardPokemon>

            <CardPokemon>
                <img src={'https://i.pinimg.com/550x/04/49/9b/04499b23327a48c6c23813777cf3341d.jpg'} alt="Jigglypuff" />
                <p><strong>Jigglypuff</strong></p>
                <span>
                    <button>Remover</button>
                    <button>Detalhes</button>
                </span>
            </CardPokemon>




        </CardGeral>
    )
}