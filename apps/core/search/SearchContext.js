// @flow

import * as React from 'react';
import { withContext } from '@bucket-list-travel-app/utils';

const defaultState = {
  origin: null,
  outboundDate: null,
  stopovers: [],
  setOrigin: () => {},
  setOutboundDate: () => {},
  replaceStopover: () => {},
};

const { Consumer, Provider: ContextProvider } = React.createContext<State>(
  defaultState,
);

export type Stopover = {|
  +id: string,
  +name: string,
  +cityName: string,
  +countryCode: string,
|};

type Props = {|
  +children: React.Node,
|};

type State = {|
  origin: Stopover | null,
  outboundDate: Date | null,
  stopovers: Stopover[],
  setOrigin: (origin: Stopover) => void,
  setOutboundDate: (date: Date) => void,
  replaceStopover: (index: number, stopover: Stopover) => void,
|};

class Provider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      ...defaultState,
      setOrigin: this.setOrigin,
      setOutboundDate: this.setOutboundDate,
      replaceStopover: this.replaceStopover,
    };
  }

  setOrigin = (origin: Stopover) => {
    this.setState({ origin });
  };

  setOutboundDate = (outboundDate: Date) => {
    this.setState({ outboundDate });
  };

  replaceStopover = (index: number, stopover: Stopover) => {
    this.setState(state => ({
      ...state,
      stopovers: [
        ...state.stopovers.slice(0, index),
        stopover,
        ...state.stopovers.slice(index + 1),
      ],
    }));
  };

  render() {
    return (
      <ContextProvider value={this.state}>
        {this.props.children}
      </ContextProvider>
    );
  }
}

export default { Provider };

export const withSearchContext = (select: State => Object) =>
  withContext<State>(select, Consumer);

export type SearchContextState = State;
