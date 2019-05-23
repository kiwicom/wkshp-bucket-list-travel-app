// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Text } from '@kiwicom/universal-components';

import type { StopoverInfoProps } from './StopoverInfoTypes';

export default function StopoverInfo({
  cityName,
  stayDuration,
}: StopoverInfoProps) {
  return (
    <View>
      {cityName && (
        <Text size="large" weight="bold">
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
