// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';
import { QueryRenderer, graphql } from '@bucket-list-travel-app/relay';
import { TextInput, StyleSheet } from '@kiwicom/universal-components';

import LocationRows from './LocationRows';
import { type Stopover } from '../search/SearchContext';
import type { LocationInputQueryResponse } from './__generated__/LocationInputQuery.graphql';

type Props = {|
  +onPressAdd: (stopover: Stopover) => void,
|};

type State = {|
  value: string,
|};

export default class LocationInput extends React.Component<Props, State> {
  state = {
    value: '',
  };

  onChangeText = (value: string) => {
    this.setState({ value });
  };

  renderInner = (props: LocationInputQueryResponse) => {
    return (
      <LocationRows
        onPressAdd={this.props.onPressAdd}
        // $FlowFixMe: Probably linked to using @relay(plural: true) directive
        locations={props.locations}
      />
    );
  };

  render() {
    return (
      <>
        <TextInput
          value={this.state.value}
          onChangeText={this.onChangeText}
          autoFocus
          autoCorrect={false}
        />
        <ScrollView style={styles.container}>
          {this.state.value !== '' && (
            <QueryRenderer
              query={graphql`
                query LocationInputQuery($input: LocationsByTermInput!) {
                  locations: locationsByTerm(input: $input) {
                    ...LocationRows_locations
                  }
                }
              `}
              variables={{
                input: {
                  term: this.state.value,
                  limit: 10,
                },
              }}
              render={this.renderInner}
            />
          )}
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '40%',
  },
});
