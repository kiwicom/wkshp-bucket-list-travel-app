// @flow

import * as React from 'react';
import { View, Image } from 'react-native';
import { StyleSheet, Text } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import BlackToAlpha from './assets/black-to-alpha-vertical.png';
import type { StopoverInfoProps } from './StopoverInfoTypes';

export default function StopoverInfo({
  cityName,
  locationId,
  stayDuration,
}: StopoverInfoProps) {
  const image = {
    uri:
      locationId == null
        ? ''
        : `https://images.kiwi.com/photos/1200x628/${locationId}.jpg`,
  };
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <Image
        source={BlackToAlpha}
        style={styles.stretchedImage}
        resizeMode="stretch"
      />
      <View style={styles.infoContainer}>
        {cityName && (
          <Text size="large" weight="bold" type="white" style={styles.cityName}>
            {cityName}
          </Text>
        )}
        {stayDuration && (
          <Text size="large" type="white">{`Stay ${stayDuration} ${
            stayDuration === 1 ? 'night' : 'nights'
          }`}</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '100%',
    maxWidth: 600,
    borderRadius: 4,
    backgroundColor: defaultTokens.paletteCloudLight,
    overflow: 'hidden',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
  },
  stretchedImage: {
    position: 'absolute',
    end: 0,
    start: 0,
    bottom: 0,
    width: null,
    height: 80,
  },
  infoContainer: {
    position: 'absolute',
    flexDirection: 'row',
    start: 12,
    end: 12,
    bottom: 12,
  },
  cityName: {
    flex: 1,
  },
});
