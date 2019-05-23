// @flow

import React from 'react';
import { Image } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';

import { type IllustrationProps } from './IllustrationTypes';
import NoResults from './assets/mobile/NoResults.png';

const getIllustration = name => {
  switch (name) {
    case 'NoResults':
      return NoResults;
    default:
      return null;
  }
};

export default function Illustration({ name, style }: IllustrationProps) {
  const illustration = getIllustration(name);
  return (
    illustration && (
      <Image style={[styles.illustration, style]} source={illustration} />
    )
  );
}

const styles = StyleSheet.create({
  illustration: {
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
