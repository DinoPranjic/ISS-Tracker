import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import tileLayer from '../util/tileLayer';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

//51.505, -0.09

function Map () {
  return(
    <MapView>
      <MapContainer center={[5.1461, 34.1595]} zoom={1} scrollWheelZoom={false} zoomControl={false} >
        <TileLayer {...tileLayer} />

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