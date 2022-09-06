import React, { useState, useContext, createContext, FC } from 'react';
import { ICoordinates, IMapContext } from './types';

const MapContext = createContext<IMapContext | null>(null);

const useMapContext = () => {
  const context = useContext(MapContext);

  if (!context) {
    throw new Error('no context provided');
  }

  return context;
}

const MapProvider: any = ({ children }: any) => {
  const [coordinates, setCoordinates] = useState<ICoordinates>({
    latitude: 0,
    longitude: 0
  });

  const mapState = {
    coordinates
  };
  const mapActions = {
    setCoordinates
  };

  return (
    <MapContext.Provider
      value={{
        mapState,
        mapActions,
      }}
    >
      {children}
    </MapContext.Provider>
  )
}

export {
  MapProvider,
  MapContext,
  useMapContext
};
