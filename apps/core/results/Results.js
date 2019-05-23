// @flow

import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { QueryRenderer, graphql } from '@bucket-list-travel-app/relay';
import { addMonths, format } from 'date-fns';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { EmptyResultsInformation } from '@bucket-list-travel-app/components';

import ResultsList from './ResultsList';
import { withSearchContext, type Stopover } from '../search/SearchContext';

type Props = {|
  origin: Stopover,
  outboundDate: Date,
  stopovers: Stopover[],
|};

class Results extends React.Component<Props> {
  renderInner = ({ itineraries }) => {
    return <ResultsList itineraries={itineraries} />;
  };

  render() {
    if (this.props.outboundDate == null) {
      return <EmptyResultsInformation />;
    }

    return (
      <SafeAreaView style={styles.container}>
        <QueryRenderer
          query={graphql`
            query ResultsQuery($input: SearchParams!) {
              itineraries: search(input: $input) {
                ...ResultsList_itineraries
              }
            }
          `}
          variables={{
            input: {
              origin: this.props.origin.id,
              destination: this.props.origin.id,
              outboundDate: {
                start: format(this.props.outboundDate, 'dd/MM/yyyy'),
                end: format(
                  addMonths(this.props.outboundDate, 1),
                  'dd/MM/yyyy',
                ),
              },
              stopovers: this.props.stopovers.map(stopover => ({
                locations: [stopover.id],
                nightsFrom: 2,
                nightsTo: 5,
              })),
            },
          }}
          render={this.renderInner}
        />
      </SafeAreaView>
    );
  }
}

export default withSearchContext(props => props)(Results);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultTokens.backgroundBody,
  },
});
