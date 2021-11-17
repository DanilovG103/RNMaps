import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSettings } from 'src/context/Settings';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const SettingTitle = styled.Text`
  color: #000;
`;

const Pressable = styled.TouchableOpacity`
  margin: 10px 0;
`;

const SettingDescr = styled.Text`
  color: #000;
`;

export const Settings = () => {
  const { setMapType } = useSettings();
  return (
    <Container>
      <SettingTitle>Map type</SettingTitle>
      <Pressable onPress={() => setMapType('standard')}>
        <SettingDescr>Standard</SettingDescr>
      </Pressable>
      <Pressable onPress={() => setMapType('hybrid')}>
        <SettingDescr>Hybrid</SettingDescr>
      </Pressable>
      <Pressable onPress={() => setMapType('satellite')}>
        <SettingDescr>Satellite</SettingDescr>
      </Pressable>
      <Pressable onPress={() => setMapType('terrain')}>
        <SettingDescr>Terrain</SettingDescr>
      </Pressable>
    </Container>
  );
};
