import Header from './componentes/Logo/Header';
import styled from 'styled-components';
import Pesquisa from './componentes/Logo/Pesquisa';
import UltimosLancamentos from './componentes/UltimosLancamentos'

const AppContainer = styled.div`

  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);

  
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa/>
      <UltimosLancamentos/>
    </AppContainer>
  );
}

export default App;
