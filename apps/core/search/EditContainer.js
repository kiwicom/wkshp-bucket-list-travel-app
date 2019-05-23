// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Icon } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

type Props = {|
  +children: React.Node,
|};

export default function EditContainer({ children }: Props) {
  return (
    <View style={styles.container}>
      {children}
      <Icon name="edit" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: parseInt(defaultTokens.spaceMedium, 10),
    borderWidth: 2,
    borderRadius: 2,
    borderColor: defaultTokens.paletteProductNormal,
    alignItems: 'center',
  },
});
