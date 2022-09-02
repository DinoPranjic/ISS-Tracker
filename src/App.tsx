import React, {useState, useEffect} from 'react';
import './App.css';
import Map from './components/Map';
import Header from './components/Header';
import styled from 'styled-components';


function App() {
//   const [latitude, setLatitude] = useState(0)
//   const [longitude, setLongitude] = useState(0)

//   const url: string = 'http://api.open-notify.org/iss-now.json'

//   const getLocation = (url: string) => {
//     return fetch(url)
//   }

// const updateLocation = () => {
//     getLocation(url).then(async result => {
//       const location = await result.json();

//       const parsedLatitude = await parseFloat(location.iss_position.latitude)
//       const parsedLongitude = await parseFloat(location.iss_position.longitude)
      
//       setLatitude(parsedLatitude);
//       setLongitude(parsedLongitude);


//     });
//   }

//   setTimeout(updateLocation, 5000)

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