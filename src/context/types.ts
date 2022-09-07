import { Dispatch, SetStateAction } from "react";

export interface ICoordinates {
  latitude: number;
  longitude: number;
}

export interface ITileLayer {
  url: string,
  maxZoom: number,
  subdomains: string[],
  key: string
}
export type Zoom = number;

export interface IMapContext {
  mapState: {
    coordinates: ICoordinates,
    tileLayer: ITileLayer,
    zoom: Zoom
  };
  mapActions: {
    setCoordinates: Dispatch<SetStateAction<ICoordinates>>,
    setTileLayer: Dispatch<SetStateAction<ITileLayer>>,
    setZoom: Dispatch<SetStateAction<Zoom>>
  };
}
