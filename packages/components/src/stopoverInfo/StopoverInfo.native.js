// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import type { StopoverInfoProps } from './StopoverInfoTypes';

export default function StopoverInfo({
  cityName,
  stayDuration,
}: StopoverInfoProps) {
  return (
    <View style={styles.container}>
      {cityName && (
        <Text size="large" weight="bold" style={styles.cityName}>
          {cityName}
        </Text>
      )}
      {stayDuration && (
        <Text size="large">{`Stay ${stayDuration} ${
          stayDuration === 1 ? 'night' : 'nights'
        }`}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    backgroundColor: defaultTokens.paletteCloudLight,
  },
  cityName: {
    flex: 1,
  },
});
