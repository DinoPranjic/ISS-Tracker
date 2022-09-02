import React from 'react';
import './App.css';
import Map from './components/Map';
import Header from './components/Header';
import styled from 'styled-components';


function App() {

  return (
    <div className="App">
      <Header />
    <AppBody>

      <Map />
    </AppBody>

    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
`