import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './navigation';
import { SettingsProvider } from './context/Settings';
import { MapStylesProvider } from './context/MapStyles';

const App = () => {
  return (
    <MapStylesProvider>
      <SettingsProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </SettingsProvider>
    </MapStylesProvider>
  );
};

export default App;
