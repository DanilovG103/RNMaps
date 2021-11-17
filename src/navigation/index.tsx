import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Map } from 'src/components/Map';
import { Settings } from 'src/components/Settings';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarLabel: 'Map',
          tabBarLabelStyle: {
            color: '#000',
            fontFamily: 'Nunito-Regular',
          },
          tabBarIcon: ({ focused }) => (
            <Icon
              name="map-pin"
              color={focused ? '#ff0a0a' : '#000'}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarLabelStyle: {
            fontFamily: 'Nunito-Regular',
            color: '#000',
          },
          tabBarIcon: ({ focused }) => (
            <Icon
              name="settings"
              size={24}
              color={focused ? '#ff0a0a' : '#000'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
