import styled from 'styled-components'

const Opcoes = styled.ul`  
display: flex;
`

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5%;
    cursor: pointer;
    min-width: 120px;
`

const textoOpcoes = ['Categorias', 'Favoritos', 'Minha Estante']

function OpcoesHeader() {
    return (
        <Opcao>
            {textoOpcoes.map((texto) => (
                <Opcoes>
                    <p>{texto}</p>
                </Opcoes>
            ))}
        </Opcao>

    )
}

export default OpcoesHeader