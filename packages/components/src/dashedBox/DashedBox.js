// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Icon, Text, StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

const GREY = '#999';

type Props = {|
  +textContent: string,
|};

const DashedBox = ({ textContent }: Props) => {
  return (
    <View style={styles.container}>
      <Icon name="plus" color={GREY} />
      <Text style={styles.text} size="large">
        {textContent}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: parseInt(defaultTokens.spaceMedium, 10),
    borderWidth: 2,
    borderRadius: 2,
    borderColor: GREY,
    borderStyle: 'dashed',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginStart: 4,
    color: GREY,
  },
});

export default DashedBox;
