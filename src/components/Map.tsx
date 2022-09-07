import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { tileLayer, issIcon } from '../util/constants';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import { useMapContext } from '../context/mapContext';

const Map = () => {
  const { mapState } = useMapContext();
  return(
    <MapView>
      <MapContainer center={[5.1461, 34.1595]} zoom={1} scrollWheelZoom={false} zoomControl={false} attributionControl={false} >
        <TileLayer {...tileLayer} />
          <Marker position={[mapState.coordinates.latitude as number, mapState.coordinates.longitude as number]} icon={issIcon}>
            <Popup>
              Current Coordinates: [{mapState.coordinates.latitude}, {mapState.coordinates.longitude}]
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