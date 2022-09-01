import { MapContainer, TileLayer } from 'react-leaflet';
import tileLayer from '../util/tileLayer';
import 'leaflet/dist/leaflet.css';



function Map () {
  return(
    <MapContainer center={[51.505, -0.09]} zoom={1} scrollWheelZoom={false} zoomControl={false}>
      <TileLayer {...tileLayer} />

    </MapContainer>
  )
}

export default Map;