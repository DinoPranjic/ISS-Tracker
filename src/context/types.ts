import { Dispatch, SetStateAction } from "react";

export interface IStatus{
  latitude: number,
  longitude: number,
  altitude: number, 
  velocity: number,
  visibility: string,
  timestamp: number,
  loading: Boolean
};

export enum LayerURLs {
  street = 'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
  hybrid = 'http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',
  satellite = 'http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
  terrain = 'http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
};

export type LayerSubDomains = ['mt0','mt1','mt2','mt3'];

export enum LayerKeys {
  street = 'street',
  hybrid = 'hybrid',
  satellite = 'satellite',
  terrain = 'terrain'
};

export interface ITileLayer {
  url: LayerURLs,
  maxZoom: number,
  subdomains: LayerSubDomains,
  key: LayerKeys
};

export interface ICenter {
  latitude: number,
  longitude: number,
  key: string
};

export interface IMapContext {
  mapState: {
    tileLayer: ITileLayer,
    center: ICenter,
    status: IStatus
  };
  mapActions: {
    setTileLayer: Dispatch<SetStateAction<ITileLayer>>,
    setCenter: Dispatch<SetStateAction<ICenter>>,
    setStatus: Dispatch<SetStateAction<IStatus>>
  };
};
