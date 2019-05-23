// @flow

import * as React from 'react';
import { View, Linking } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { StyleSheet, Button, Card } from '@kiwicom/universal-components';
import {
  SectorSummary,
  StopoverInfo,
  ItinerarySpotName,
} from '@bucket-list-travel-app/components';
import {
  graphql,
  createFragmentContainer,
} from '@bucket-list-travel-app/relay';
import {
  getDurationInNights,
  formatDate,
  formatMinutesDuration,
} from '@bucket-list-travel-app/utils';

import type { Result_itinerary as ResultType } from './__generated__/Result_itinerary.graphql';

type Props = {|
  +itinerary: ?ResultType,
|};

const parseCarriers = segments => {
  if (segments == null) {
    return [];
  }
  return segments.reduce((acc, segment) => {
    return [...acc, { code: segment?.carrier?.code ?? '', name: '' }];
  }, []);
};

class Result extends React.Component<Props> {
  handleBookPress = () => {
    Linking.openURL(
      this.props.itinerary?.bookingURL ?? 'https://www.kiwi.com/en/',
    ).catch(() => {});
  };

  getBookingLabel = (amount: ?number, currency: ?string): string => {
    if (amount == null || currency == null) {
      return 'Check booking price';
    }
    return `Book for ${amount} ${currency}`;
  };

  render() {
    const { itinerary } = this.props;
    const bookingLabel = this.getBookingLabel(100, 'EUR');

    const sectorsData = itinerary?.sectors ?? [];
    const sectors = sectorsData.map((sector, index) => {
      const carriers = parseCarriers(sector?.segments);
      return (
        <View key={index}>
          {index > 0 && (
            <StopoverInfo
              cityName={'CITY_NAME'}
              locationId={'BUD'}
              stayDuration={getDurationInNights(
                sectorsData[index - 1]?.arrival?.time?.utc,
                sector?.departure?.time?.utc,
              )}
            />
          )}
          <SectorSummary
            departureInfo={formatDate(10000000000)}
            durationInfo={'2h' || formatMinutesDuration(sector?.duration)}
            carriers={carriers}
          />
        </View>
      );
    });

    return (
      <Card style={styles.itinerary}>
        <ItinerarySpotName label="Start from" name={'START_FROM_CITY_NAME'} />
        {sectors}
        <ItinerarySpotName label="End in" name={'END_IN_CITY_NAME'} />
        <View style={styles.menuWrapper}>
          <Button
            style={styles.bookButton}
            onPress={this.handleBookPress}
            label={bookingLabel}
          />
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  itinerary: {
    alignSelf: 'center',
    width: '100%',
    maxWidth: 600,
    padding: 16,
    marginVertical: 8,
    web: {
      shadowColor: defaultTokens.paletteInkDark,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
  },
  menuWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  bookButton: {
    width: '30%',
    minWidth: 150,
  },
});

export default createFragmentContainer(Result, {
  itinerary: graphql`
    fragment Result_itinerary on Itinerary {
      bookingURL
      sectors {
        duration
        departure {
          time {
            utc
          }
        }
        arrival {
          time {
            utc
          }
        }
        segments {
          carrier {
            code
          }
        }
      }
    }
  `,
});
