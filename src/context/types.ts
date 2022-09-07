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

export interface IMapContext {
  mapState: {
    coordinates: ICoordinates,
    tileLayer: ITileLayer
  };
  mapActions: {
    setCoordinates: Dispatch<SetStateAction<ICoordinates>>,
    setTileLayer: Dispatch<SetStateAction<ITileLayer>>
  };
}
