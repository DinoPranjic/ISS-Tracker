import './App.css';
import styled from 'styled-components';
import { MapProvider } from './context/mapContext';
import Container from './components/Container';
import Sidebar from './components/Sidebar';
import Map from './components/Map';

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
      <Wrapper>
        <Container />
      </Wrapper>
      {/* <AppBody>
        <Sidebar />
        <Container />
      </AppBody> */}
    </MapProvider>
  );
}

export default App;