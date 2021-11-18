import React, { useMemo, useState } from 'react';
import { createContext, ReactNode, useContext } from 'react';

const initialState = {
  mapStyle: [],
};

const MapStyles = createContext(initialState);

export const useMapStyles = () => useContext(MapStyles);

interface Props {
  children: ReactNode;
}

export const MapStylesProvider = ({ children }: Props) => {
  const [mapStyle, setMapStyle] = useState<unknown[]>([]);

  const value = useMemo(
    () => ({
      mapStyle,
      setMapStyle,
    }),
    [mapStyle, setMapStyle],
  );

  return <MapStyles.Provider value={value}>{children}</MapStyles.Provider>;
};
