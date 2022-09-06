import L from 'leaflet';

const tileLayer = {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
};

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
  tileLayer,
  url,
  issIcon
};