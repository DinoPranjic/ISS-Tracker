import { Dispatch, SetStateAction } from "react";

export interface ICoordinates {
  latitude: number;
  longitude: number;
}

export interface IMapContext {
  mapState: {
    coordinates: ICoordinates
  };
  mapActions: {
    setCoordinates: Dispatch<SetStateAction<ICoordinates>>
  };
}
