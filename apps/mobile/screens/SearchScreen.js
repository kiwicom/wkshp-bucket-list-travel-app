// @flow

import React from 'react';
import { SearchScene } from '@bucket-list-travel-app/core';

type Props = {||};

export default class SearchScreen extends React.Component<Props> {
  static navigationOptions = {
    header: null,
  };

  render() {
    return <SearchScene />;
  }
}
