// @flow

import * as React from 'react';
import { View, Dimensions, SafeAreaView } from 'react-native';
import {
  Button,
  Text,
  StyleSheet,
  DatePicker,
  Touchable,
} from '@kiwicom/universal-components';
import {
  withNavigation,
  Routes,
  type Navigation,
} from '@bucket-list-travel-app/navigation';
import { Modal, DashedBox } from '@bucket-list-travel-app/components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import {
  withSearchContext,
  type Stopover as StopoverType,
} from './SearchContext';
import LocationInput from '../locationInput/LocationInput';
import Stopover from './Stopover';
import DateContainer from './DateContainer';

type Props = {|
  +navigation: Navigation,
  +origin: StopoverType | null,
  +outboundDate: Date | null,
  +stopovers: StopoverType[],
  +setOrigin: (origin: StopoverType) => void,
  +setOutboundDate: (date: Date) => void,
  +replaceStopover: (index: number, stopover: StopoverType) => void,
|};

type State = {|
  isDatePickerVisible: boolean,
  isModalVisible: boolean,
  isMobile: boolean,
  onPressAdd: (stopover: StopoverType) => void,
|};

class SearchScene extends React.Component<Props, State> {
  showDepartureModal;

  constructor(props: Props) {
    super(props);
    this.state = {
      isModalVisible: false,
      isDatePickerVisible: false,
      isMobile: this.isMobile(Dimensions.get('window').width),
      onPressAdd: () => {},
    };

    this.showDepartureModal = this.showModal(this.setOrigin);
  }

  showModal = (onPressAdd: (stopover: StopoverType) => void) => () => {
    this.setState({ isModalVisible: true, onPressAdd });
  };

  setOrigin = (stopover: StopoverType) => {
    this.hideModal();
    this.props.setOrigin(stopover);
  };

  replaceStopover = (index: number) => (stopover: StopoverType) => {
    this.hideModal();
    this.props.replaceStopover(index, stopover);
  };

  showStopoversModal = (index: number) =>
    this.showModal(this.replaceStopover(index));

  hideModal = () => {
    this.setState({ isModalVisible: false });
  };

  showDatePicker = () => {
    this.setState({ isDatePickerVisible: true });
  };

  hideDatePicker = () => {
    this.setState({ isDatePickerVisible: false });
  };

  saveDateAndClose = (date: Date) => {
    this.props.setOutboundDate(date);
    this.hideDatePicker();
  };

  goToResults = () => {
    this.props.navigation.navigate(Routes.RESULTS);
  };

  goToPlayground = () => {
    this.props.navigation.navigate(Routes.PLAYGROUND);
  };

  isMobile = width => width < defaultTokens.widthBreakpointLargeMobile;

  onLayout = e => {
    this.setState({
      isMobile: this.isMobile(e.nativeEvent.layout.width),
    });
  };

  render() {
    const searchDisabled =
      this.props.outboundDate == null ||
      this.props.origin == null ||
      this.props.stopovers.length === 0;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.card} onLayout={this.onLayout}>
          <View
            style={!this.state.isMobile ? styles.rowWrapContainerWeb : null}
          >
            <View style={styles.departureSection}>
              <Text size="large">I'm departing from</Text>
              <View style={styles.dashedBoxContainer}>
                <Touchable onPress={this.showDepartureModal}>
                  {this.props.origin == null ? (
                    <DashedBox textContent="Departure location" />
                  ) : (
                    <Stopover stopover={this.props.origin} />
                  )}
                </Touchable>
              </View>
            </View>
            <View style={styles.dateSection}>
              <Text size="large">on</Text>
              <View style={styles.dashedBoxContainer}>
                <Touchable onPress={this.showDatePicker}>
                  {this.props.outboundDate == null ? (
                    <DashedBox textContent="Date of departure" />
                  ) : (
                    <DateContainer date={this.props.outboundDate} />
                  )}
                </Touchable>
              </View>
            </View>
          </View>
          <View>
            <Text size="large">and I want to see</Text>
            <View style={styles.rowWrapContainerWeb}>
              {this.props.stopovers.map((stopover, index) => (
                <View
                  style={styles.dashedBoxContainer}
                  key={stopover.id + index}
                >
                  <Touchable onPress={this.showStopoversModal(index)}>
                    <Stopover stopover={stopover} />
                  </Touchable>
                </View>
              ))}
              <View style={styles.dashedBoxContainer}>
                <Touchable
                  onPress={this.showStopoversModal(this.props.stopovers.length)}
                >
                  <DashedBox textContent="Add another destination" />
                </Touchable>
              </View>
            </View>
          </View>
          <View style={styles.searchButtonContainer}>
            <Button onPress={this.goToResults} disabled={searchDisabled}>
              <Text type="white" weight="bold" expo>
                Search
              </Text>
            </Button>
          </View>
          <View style={styles.searchButtonContainer}>
            <Button onPress={this.goToPlayground} type="secondary">
              <Text type="primary" weight="bold" expo>
                Playground
              </Text>
            </Button>
          </View>
          <DatePicker
            date={this.props.outboundDate || new Date()}
            minDate={new Date()}
            isVisible={this.state.isDatePickerVisible}
            onDismiss={this.hideDatePicker}
            onConfirm={this.saveDateAndClose}
            labels={{ cancel: 'Cancel', confirm: 'OK' }}
            datePickerMode="calendar"
          />
          <Modal isVisible={this.state.isModalVisible} onClose={this.hideModal}>
            <LocationInput onPressAdd={this.state.onPressAdd} />
            <Button style={styles.closeButton} onPress={this.hideModal}>
              <Text type="white" weight="bold" expo>
                Close
              </Text>
            </Button>
          </Modal>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultTokens.backgroundBody,
    justifyContent: 'center',
    alignItems: 'center',
    android: {
      paddingTop: 16,
    },
  },
  card: {
    height: '100%',
    padding: 16,
    justifyContent: 'space-between',

    backgroundColor: 'white',
    borderRadius: parseInt(defaultTokens.borderRadiusLarge, 10),
    shadowColor: defaultTokens.paletteInkDark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    android: {
      elevation: 2,
    },
    web: {
      height: 'auto',
      width: '100%',
      maxWidth: 600,
    },
  },
  rowWrapContainerWeb: {
    web: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  },
  departureSection: {
    web: {
      flexBasis: '40%',
    },
  },
  dateSection: {
    web: {
      flexBasis: '40%',
    },
  },
  closeButton: {
    marginTop: parseInt(defaultTokens.spaceSmall, 10),
  },
  dashedBoxContainer: {
    web: {
      flex: 1,
      flexBasis: '40%',
    },
    margin: parseInt(defaultTokens.spaceSmall, 10),
  },
  searchButtonContainer: {
    web: {
      alignSelf: 'flex-end',
      minWidth: 160,
    },
  },
});

export default withNavigation(withSearchContext(props => props)(SearchScene));
