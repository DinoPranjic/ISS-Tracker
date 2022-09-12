import { useState, useContext, createContext } from 'react';
import { IMapContext, ITileLayer, ICenter, IStatus } from './types';

const MapContext = createContext<IMapContext | null>(null);

const useMapContext = () => {
  const context = useContext(MapContext);

  if (!context) {
    throw new Error('no context provided');
  }

  return context;
}

const MapProvider: any = ({ children }: any) => {
  const [status, setStatus] = useState<IStatus>({
    latitude: 0,
    longitude: 0,
    altitude: 0,
    velocity: 0,
    visibility: '',
    timestamp: 0
  })

  const [tileLayer, setTileLayer] = useState<ITileLayer>({
    url: 'http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'],
    key: 'terrain'
  })

  const [center, setCenter] = useState<ICenter>({
    latitude: 0,
    longitude: 0,
    key: 'start'

  })

  const mapState = {
    tileLayer,
    center,
    status
  };
  const mapActions = {
    setTileLayer,
    setCenter,
    setStatus
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