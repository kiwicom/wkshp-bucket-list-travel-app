// @flow

import * as React from 'react';
import { Image } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

type Props = {|
  +countryCode: string,
|};

export default function Flag({ countryCode }: Props) {
  return (
    <Image
      style={styles.flag}
      source={{
        uri: `https://images.kiwi.com/flags/24x0/flag-${countryCode.toLowerCase()}.jpg`,
      }}
    />
  );
}

const styles = StyleSheet.create({
  flag: {
    borderColor: defaultTokens.paletteInkDark,
    borderWidth: StyleSheet.hairlineWidth,
    width: 20,
    height: 14,
  },
});
