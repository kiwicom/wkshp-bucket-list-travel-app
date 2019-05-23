// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react-native';

import EmptyResultsInformation from './EmptyResultsInformation';

storiesOf('EmptyResultsInformation', module).add('Default', () => {
  return <EmptyResultsInformation />;
});
