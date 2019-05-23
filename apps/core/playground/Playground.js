// @flow

import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { graphql, QueryRenderer } from '@bucket-list-travel-app/relay';

type Props = {||};

export default class Playground extends React.Component<Props> {
  renderInner = () => {};

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <QueryRenderer
          query={graphql`
          query PlaygroundQuery($input: LocationsByTermInput!) {
            locations: locationsByTerm(input: $input) {
              # TODO
            }
          }
          `}
          variables={{
            input: {
              // TODO
            },
          }}
          render={this.renderInner}
        /> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultTokens.backgroundBody,
  },
});
