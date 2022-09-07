import L from 'leaflet';

// 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
// https://stackoverflow.com/questions/9394190/leaflet-map-api-with-google-satellite-layer

// const tileLayer = {
//   attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
//   url: 'http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',
//   subdomains:['mt0','mt1','mt2','mt3']
// };

const streetLayer = {
  url: 'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
  maxZoom: 20,
  subdomains:['mt0','mt1','mt2','mt3'],
  key: 'street'
}

const hybridLayer = {
  url: 'http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',
  maxZoom: 20,
  subdomains:['mt0','mt1','mt2','mt3'],
  key: 'hybrid'
}

const satelliteLayer = {
  url: 'http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
  maxZoom: 20,
  subdomains:['mt0','mt1','mt2','mt3'],
  key: 'satellite'
}

const terrainLayer = {
  url: 'http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',
  maxZoom: 20,
  subdomains:['mt0','mt1','mt2','mt3'],
  key: 'terrain'
}

const url: string = 'http://api.open-notify.org/iss-now.json';

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

export {
  url,
  issIcon,
  streetLayer,
  hybridLayer,
  satelliteLayer,
  terrainLayer
};