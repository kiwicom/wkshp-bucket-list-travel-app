// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  StyleSheet,
  CarrierLogo,
  Text,
  Badge,
  Icon,
} from '@kiwicom/universal-components';

type Props = {|
  +departureInfo: ?string,
  +durationInfo: ?string,
  +carriers: CarrierData[],
|};

export type CarrierData = {
  code: ?string,
  name: ?string,
  type?: 'airline' | 'bus' | 'train',
};

export default function SectorSummary({
  departureInfo,
  durationInfo,
  carriers,
}: Props) {
  return (
    <View style={styles.container}>
      <Icon name="arrow-down" />
      <Text type="secondary" style={styles.departureInfo}>
        {departureInfo ?? ''}
      </Text>
      <Badge type="info" style={styles.durationBadge}>
        {durationInfo ?? ''}
      </Badge>
      {carriers != null && carriers.length > 0 && (
        <CarrierLogo carriers={carriers} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  departureInfo: {
    flex: 1,
    marginStart: 8,
  },
  durationBadge: {
    alignSelf: 'center',
    marginEnd: 8,
  },
});
