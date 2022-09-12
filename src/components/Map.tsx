import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { issIcon } from '../util/constants';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import { useMapContext } from '../context/mapContext';

const MapView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`

const Map = () => {
  const { mapState } = useMapContext();
  
  return(
    <MapView>
      <MapContainer center={[mapState.center.latitude as number, mapState.center.longitude as number]} key={mapState.center.key} zoom={1} scrollWheelZoom={true} zoomControl={true} attributionControl={false}>
        <TileLayer {...mapState.tileLayer} />
          <Marker position={[mapState.status.latitude as number, mapState.status.longitude as number]} icon={issIcon} />
      </MapContainer>
      
    </MapView>
  )
}

export default Map;