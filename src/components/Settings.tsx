import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useMapStyles } from 'src/context/MapStyles';
import { useSettings } from 'src/context/Settings';
import { colors } from 'src/theme/colors';
import { styles } from 'src/theme/maps';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  padding: 25px;
`;

const SettingTitle = styled.Text`
  color: ${colors.dark};
  font-size: 19px;
  font-family: 'Nunito-Bold';
  align-self: center;
`;

const Pressable = styled.TouchableOpacity`
  margin: 12px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SettingDescr = styled.Text`
  color: ${colors.gray[0]};
  font-size: 15px;
  font-family: 'Nunito-SemiBold';
`;

const Circle = styled.View<{ selected: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid ${colors.gray[1]};
  background-color: ${props => (props.selected ? colors.pink : 'transparent')};
`;

export const Settings = () => {
  const { mapType, setMapType } = useSettings();
  const { mapStyle, setMapStyle } = useMapStyles();
  const isStandard = mapType === 'standard';
  const isHybrid = mapType === 'hybrid';
  const isSatellite = mapType === 'satellite';
  const isTerrain = mapType === 'terrain';

  return (
    <Container>
      <SettingTitle>Map type</SettingTitle>
      <Pressable onPress={() => setMapType('standard')}>
        <SettingDescr>Standard</SettingDescr>
        <Circle selected={isStandard} />
      </Pressable>
      <Pressable onPress={() => setMapType('hybrid')}>
        <SettingDescr>Hybrid</SettingDescr>
        <Circle selected={isHybrid} />
      </Pressable>
      <Pressable onPress={() => setMapType('satellite')}>
        <SettingDescr>Satellite</SettingDescr>
        <Circle selected={isSatellite} />
      </Pressable>
      <Pressable onPress={() => setMapType('terrain')}>
        <SettingDescr>Terrain</SettingDescr>
        <Circle selected={isTerrain} />
      </Pressable>
      <SettingTitle>Map style</SettingTitle>
      <FlatList
        data={styles}
        renderItem={({ item }) => (
          <Pressable onPress={() => setMapStyle(item.component)}>
            <SettingDescr>{item.name}</SettingDescr>
            <Circle selected={mapStyle === item.component} />
          </Pressable>
        )}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};
