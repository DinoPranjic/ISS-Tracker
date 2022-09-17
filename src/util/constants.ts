import L from 'leaflet';
import { ITileLayer, LayerURLs } from '../context/types';

const streetLayer: ITileLayer = {
  url: LayerURLs.street,
  maxZoom: 20,
  subdomains:['mt0','mt1','mt2','mt3'],
  key: 'street'
}

const hybridLayer: ITileLayer = {
  url: LayerURLs.hybrid,
  maxZoom: 20,
  subdomains:['mt0','mt1','mt2','mt3'],
  key: 'hybrid'
}

const satelliteLayer: ITileLayer = {
  url: LayerURLs.satellite,
  maxZoom: 20,
  subdomains:['mt0','mt1','mt2','mt3'],
  key: 'satellite'
}

const terrainLayer: ITileLayer = {
  url: LayerURLs.terrain,
  maxZoom: 20,
  subdomains:['mt0','mt1','mt2','mt3'],
  key: 'terrain'
}

const url: string = 'https://api.wheretheiss.at/v1/satellites/25544'

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