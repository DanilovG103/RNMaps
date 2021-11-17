import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MapStyles from 'src/theme/MapStyles.json';

export const Map = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const coords = Geolocation.getCurrentPosition(
    loc => {
      setLatitude(loc.coords.latitude);
      setLongitude(loc.coords.longitude);
    },
    err => console.log(err.message),
    { enableHighAccuracy: true },
  );

  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: '100%',
      }}>
      <MapView
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        customMapStyle={MapStyles}
        style={{ ...StyleSheet.absoluteFillObject }}
        zoomEnabled
        showsUserLocation
        followsUserLocation
        loadingEnabled
      />
    </View>
  );
};
