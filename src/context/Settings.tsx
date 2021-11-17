import React, { useMemo, useState } from 'react';
import { createContext, ReactNode, useContext } from 'react';
import { MapTypes } from 'react-native-maps';

interface IState {
  mapType: MapTypes;
}

const initialState: IState = {
  mapType: 'standard',
};

const Setting = createContext(initialState);

export const useSettings = () => useContext(Setting);

interface Props {
  children: ReactNode;
}

export const SettingsProvider = ({ children }: Props) => {
  const [mapType, setMapType] = useState<MapTypes>('standard');

  const value = useMemo(
    () => ({
      mapType,
      setMapType,
    }),
    [mapType, setMapType],
  );

  return <Setting.Provider value={value}>{children}</Setting.Provider>;
};
