import React from 'react';
import './App.css';
import Map from './components/Map';
import Header from './components/Header';
import styled from 'styled-components';


function App() {
  const url: string = 'http://api.open-notify.org/iss-now.json'

  const getLocation = (url: string) => {
    return fetch(url)
  }

  getLocation(url).then(async result => {
    const location = await result.json();

    console.log(location.iss_position);
  })

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