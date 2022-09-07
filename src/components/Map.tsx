import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { issIcon } from '../util/constants';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import { useMapContext } from '../context/mapContext';


const Map = () => {
  const { mapState } = useMapContext();
  return(
    <MapView>
      <MapContainer center={[0,0]} zoom={mapState.zoom} scrollWheelZoom={true} zoomControl={false} attributionControl={false} >
        <TileLayer {...mapState.tileLayer} />
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