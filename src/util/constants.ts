import L from 'leaflet';
import { ITileLayer, LayerURLs, LayerSubDomains, LayerKeys } from '../context/types';

const subdomains: LayerSubDomains = ['mt0','mt1','mt2','mt3'];

const streetLayer: ITileLayer = {
  url: LayerURLs.street,
  maxZoom: 20,
  subdomains,
  key: LayerKeys.street
};

const hybridLayer: ITileLayer = {
  url: LayerURLs.hybrid,
  maxZoom: 20,
  subdomains,
  key: LayerKeys.hybrid
};

const satelliteLayer: ITileLayer = {
  url: LayerURLs.satellite,
  maxZoom: 20,
  subdomains,
  key: LayerKeys.satellite
};

const terrainLayer: ITileLayer = {
  url: LayerURLs.terrain,
  maxZoom: 20,
  subdomains,
  key: LayerKeys.terrain
};

const url: string = 'https://api.wheretheiss.at/v1/satellites/25544';

const issIcon = new L.Icon({
  iconUrl: require('../img/icon.png'),
  iconRetinaUrl: require('../img/icon.png'),
  iconAnchor: new L.Point(0, 0),
  popupAnchor: new L.Point(16, 0),
  iconSize: new L.Point(32, 32),
  className: 'iss-icon'
});

export {
  url,
  issIcon,
  streetLayer,
  hybridLayer,
  satelliteLayer,
  terrainLayer,
};