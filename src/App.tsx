import './App.css';
import styled from 'styled-components';
import { MapProvider, useMapContext } from './context/mapContext';
import AppContainer from './components/AppContainer';
import Header from './components/Header';

const Wrapper = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  margin: 0 auto;
`;

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