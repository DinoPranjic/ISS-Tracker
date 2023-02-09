import './App.css';
import styled from 'styled-components';
import { MapProvider, useMapContext } from './context/mapContext';
import AppContainer from './components/AppContainer';
import Header from './components/Header';

const AppBody = styled.div`
  display: flex;
  height: 100vh;
  background-color: #202225;
  opacity: 0.8;
  /* margin-top: 5vh;
  margin-bottom: 5vh; */
  /* margin-left: 2.5vw;
  margin-right: 2.5vw; */
  border: black 1px solid;
  border-radius: 1%;
`

const Wrapper = styled.div`
  padding-left: 100px;
  padding-right: 100px;
  margin: 0 auto;
`
const App = () => {
  return (
    <MapProvider>
      <Header />
      <Wrapper>
        <AppContainer />
      </Wrapper>
    </MapProvider>
  );
}

export default App;