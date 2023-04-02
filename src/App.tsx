import './App.css';
import styled from 'styled-components';
import { MapProvider } from './context/mapContext';
import AppContainer from './components/AppContainer';
import Header from './components/Header';

import backgroundImage from './img/background.jpg';


const Wrapper = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  margin: 0 auto;
`;

const Container = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  min-height: 100vh;
`;

const App = () => {
  console.log(backgroundImage);
  return (
    <MapProvider>
      <Container>
        <Header />
        <Wrapper>
          <AppContainer />
        </Wrapper>
      </Container>
    </MapProvider>
  );
}

export default App;