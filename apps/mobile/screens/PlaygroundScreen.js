// @flow

import React from 'react';
import { Playground } from '@bucket-list-travel-app/core';

export default class PlaygroundScreen extends React.Component<{}> {
  static navigationOptions = {
    title: 'Playground',
  };

  render() {
    return <Playground />;
  }
}
