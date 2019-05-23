// @flow

import React from 'react';
import { Results } from '@bucket-list-travel-app/core';

export default class ResultsScreen extends React.Component<{}> {
  static navigationOptions = {
    title: 'Results',
  };

  render() {
    return <Results />;
  }
}
