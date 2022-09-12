import { Dispatch, SetStateAction } from "react";

export interface IStatus{
  latitude: number,
  longitude: number,
  altitude: number, 
  velocity: number,
  visibility: string,
  timestamp: number
}

export interface ITileLayer {
  url: string,
  maxZoom: number,
  subdomains: string[],
  key: string
}

export interface ICenter {
  latitude: number,
  longitude: number,
  key: string
}

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
}
