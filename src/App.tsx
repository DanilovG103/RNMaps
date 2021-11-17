import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './navigation';
import { SettingsProvider } from './context/Settings';

const App = () => {
  return (
    <SettingsProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SettingsProvider>
  );
};

export default App;
