import React, { useState, useContext, createContext, FC } from 'react';
import { ICoordinates, IMapContext, ITileLayer, Zoom } from './types';

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

  const [tileLayer, setTileLayer] = useState<ITileLayer>({
    url: 'http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'],
    key: 'terrain'
  })

  const [zoom, setZoom] = useState<Zoom>(1)

  const mapState = {
    coordinates,
    tileLayer,
    zoom
  };
  const mapActions = {
    setCoordinates,
    setTileLayer,
    setZoom
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
