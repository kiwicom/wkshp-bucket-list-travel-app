// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { text, withKnobs } from '@storybook/addon-knobs';

import ItinerarySpotName from './ItinerarySpotName';

storiesOf('ItinerarySpotName', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const label = text('label', 'Start from');
    const name = text('name', 'Prague');
    return <ItinerarySpotName label={label} name={name} />;
  });
