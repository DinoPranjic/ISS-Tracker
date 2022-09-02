import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import tileLayer from '../util/tileLayer';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import L from 'leaflet'

// {new Icon({iconUrl: '../public/icon.png', iconSize: [25, 41], iconAnchor: [12, 41]})}
//51.505, -0.09

function Map () {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  let coordinates: [number, number] = [latitude, longitude];

  const issIcon = new L.Icon({
    iconUrl: require('../img/icon.png'),
    iconRetinaUrl: require('../img/icon.png'),
    iconAnchor: new L.Point(0, 0),
    popupAnchor: new L.Point(16, 0),
    // shadowUrl: null,
    // shadowSize: null,
    // shadowAnchor: null,
    iconSize: new L.Point(32, 32),
    className: 'iss-icon'
  });

  const url: string = 'http://api.open-notify.org/iss-now.json'



  const getLocation = (url: string) => {
    return fetch(url)
  }

const updateLocation = () => {
    getLocation(url).then(async result => {
      const location = await result.json();

      const parsedLatitude = await parseFloat(location.iss_position.latitude)
      const parsedLongitude = await parseFloat(location.iss_position.longitude)
      
      setLatitude(parsedLatitude);
      setLongitude(parsedLongitude);

      console.log(parsedLatitude)
      console.log(parsedLongitude)

    });
  }

  setTimeout(updateLocation, 5000)




  return(
    <MapView>
      <MapContainer center={[5.1461, 34.1595]} zoom={1} scrollWheelZoom={false} zoomControl={false} >
        <TileLayer {...tileLayer} />
          <Marker position={coordinates} icon={issIcon}>
            <Popup>
              Current Coordinates: [{latitude}, {longitude}]
            </Popup>

          </Marker>
      </MapContainer>
    </MapView>
  )
}




export default Map;

const MapView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`