import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import { MapProvider } from './context/mapContext';
import Container from './components/Container';
import Sidebar from './components/Sidebar';

const AppBody = styled.div`
  display: flex;
  height: 100vh;

`
const App = () => {
  return (
    <MapProvider>
      <Header />
      <AppBody>
        <Sidebar />
        <Container />
      </AppBody>
    </MapProvider>
  );
}

export default App;

