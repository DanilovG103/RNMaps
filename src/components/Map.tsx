import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { useSettings } from 'src/context/Settings';
import { useMapStyles } from 'src/context/MapStyles';

interface IMarker {
  coordinates: {
    longitude: number;
    latitude: number;
  };
}

export const Map = () => {
  const [markers, setMarkers] = useState<IMarker[]>([]);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const { mapType } = useSettings();
  const { mapStyle } = useMapStyles();

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
        mapType={mapType}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        customMapStyle={mapStyle}
        style={{ ...StyleSheet.absoluteFillObject }}
        zoomEnabled
        showsUserLocation
        followsUserLocation
        loadingEnabled
        onLongPress={e => {
          setMarkers([
            ...markers,
            {
              coordinates: {
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
              },
            },
          ]);
        }}>
        {markers.map((item, index) => (
          <Marker key={index} pinColor="blue" coordinate={item.coordinates} />
        ))}
      </MapView>
    </View>
  );
};
