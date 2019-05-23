// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Text, StyleSheet, Button } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import {
  graphql,
  createFragmentContainer,
} from '@bucket-list-travel-app/relay';
import { Flag } from '@bucket-list-travel-app/components';

import type { LocationRows_locations as LocationRowsType } from './__generated__/LocationRows_locations.graphql';
import { type Stopover } from '../search/SearchContext';

type Props = {|
  +locations: ?LocationRowsType,
  +onPressAdd: (stopover: Stopover) => void,
|};

class LocationRows extends React.Component<Props> {
  onPressAdd = (stopover: Stopover) => () => this.props.onPressAdd(stopover);

  render() {
    const items =
      this.props.locations &&
      this.props.locations.map(location => {
        return (
          <View style={styles.rowContainer} key={location.id}>
            <View style={styles.textContainer}>
              <Text size="large" numberOfLines={1}>
                {location.name}
              </Text>
              <Flag countryCode={location.country?.code ?? ''} />
            </View>
            <Button
              size="small"
              type="secondary"
              onPress={this.onPressAdd({
                id: location.id,
                name: location.name ?? 'N/A',
                cityName: location.city?.name ?? 'N/A',
                countryCode: location.country?.code ?? '',
              })}
            >
              <Text style={styles.text} type="primary" weight="bold" expo>
                Add
              </Text>
            </Button>
          </View>
        );
      });
    return <View style={styles.container}>{items}</View>;
  }
}

export default createFragmentContainer(LocationRows, {
  locations: graphql`
    fragment LocationRows_locations on Location @relay(plural: true) {
      id
      name
      city {
        name
      }
      country {
        code
      }
    }
  `,
});

const styles = StyleSheet.create({
  container: {
    borderColor: defaultTokens.paletteCloudNormal,
    borderWidth: 1,
    paddingTop: parseInt(defaultTokens.spaceSmall, 10),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 10,
  },
});
