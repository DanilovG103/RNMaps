import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Map } from 'src/components/Map';
import { Settings } from 'src/components/Settings';

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};
