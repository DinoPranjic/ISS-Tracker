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
      <MapContainer center={[mapState.center.latitude, mapState.center.longitude]} key={mapState.center.key} zoom={1} scrollWheelZoom={true} zoomControl={true} attributionControl={false}>
        <TileLayer {...mapState.tileLayer} />
          <Marker position={[mapState.status.latitude, mapState.status.longitude]} icon={issIcon} />
      </MapContainer>
      </MapView>

      

  )
}

export default Map;