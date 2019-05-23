// @flow

import React from 'react';
import { View, Linking, Platform } from 'react-native';
import { StyleSheet, Text, Button } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import Illustration from '../illustration/Illustration';

type Props = {||};

export default class EmptyResultsInformation extends React.Component<Props> {
  handleBackPress = () => {
    Linking.openURL('./').catch(() => {});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text weight="bold" style={styles.text}>
          Sorry, no results found
        </Text>
        <Text style={styles.description}>Adjust search parameters</Text>
        <Illustration style={styles.illustration} name="NoResults" />
        {Platform.OS === 'web' && (
          <Button onPress={this.handleBackPress} label="Back to Search form" />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 30,
  },
  text: {
    fontSize: parseFloat(defaultTokens.fontSizeTextNormal),
    color: defaultTokens.colorTextAttention,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  description: {
    fontSize: parseFloat(defaultTokens.fontSizeTextSmall),
    color: defaultTokens.colorTextSecondary,
    paddingBottom: 40,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  illustration: {
    paddingBottom: 20,
  },
});
