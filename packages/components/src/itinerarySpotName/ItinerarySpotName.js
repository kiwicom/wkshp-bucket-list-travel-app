// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text } from '@kiwicom/universal-components';

type Props = {|
  +label: string,
  +name: ?string,
|};

export default function ItinerarySpotName({ label, name }: Props) {
  if (name == null) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text size="large">{label} </Text>
      <Text size="large" weight="bold">
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
