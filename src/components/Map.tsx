import { MapContainer, TileLayer } from 'react-leaflet';
import tileLayer from '../util/tileLayer';
import 'leaflet/dist/leaflet.css';

//51.505, -0.09

function Map () {
  return(
    <MapContainer center={[5.1461, 34.1595]} zoom={1} scrollWheelZoom={false} zoomControl={false} dragging={false}>
      <TileLayer {...tileLayer} />

    </MapContainer>
  )
}

export default Map;