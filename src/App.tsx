import './App.css';
import Header from './components/Header';
import { MapProvider } from './context/mapContext';
import Container from './components/Container';

const App = () => {
  return (
    <MapProvider>
      <Header />
      <Container />
    </MapProvider>
  );
}

export default App;

