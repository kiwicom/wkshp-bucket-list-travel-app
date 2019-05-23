// @flow

import * as React from 'react';
import { FlatList } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import {
  graphql,
  createFragmentContainer,
} from '@bucket-list-travel-app/relay';
import { EmptyResultsInformation } from '@bucket-list-travel-app/components';

import Result from './Result';
import type { ResultsList_itineraries as ResultsListType } from './__generated__/ResultsList_itineraries.graphql';

type Props = {|
  +itineraries: ?ResultsListType,
|};

class ResultsList extends React.Component<Props> {
  resultItem = ({ item }) => {
    return <Result itinerary={item} />;
  };

  keyExtractor = item => {
    return item.id;
  };

  render() {
    if (this.props.itineraries == null || this.props.itineraries.length === 0) {
      return <EmptyResultsInformation />;
    }
    return (
      <FlatList
        contentContainerStyle={styles.container}
        data={this.props.itineraries}
        keyExtractor={this.keyExtractor}
        renderItem={this.resultItem}
      />
    );
  }
}

export default createFragmentContainer(ResultsList, {
  itineraries: graphql`
    fragment ResultsList_itineraries on Itinerary @relay(plural: true) {
      id
      ...Result_itinerary
    }
  `,
});

const styles = StyleSheet.create({
  container: {
    // todo - center align
  },
});
