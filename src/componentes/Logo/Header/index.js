import Logo from '../../Logo'
import IconesHeader from '../../Logo/IconesHeader';
import OpcoesHeader from '../../Logo/OpcoesHeader'
import styled from 'styled-components'

const HeaderContainert = styled.header `

    background-color: #FFF;
    display: flex;
    justify-content: center;
  
  
`

function Header() {
    return (
        <HeaderContainert>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainert>
    )
}

export default Header