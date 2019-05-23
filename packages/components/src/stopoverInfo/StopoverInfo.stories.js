// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { text, number, withKnobs } from '@storybook/addon-knobs';

import StopoverInfo from './StopoverInfo';

storiesOf('StopoverInfo', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const cityName = text('cityName', 'Prague');
    const locationId = text('locationId', 'st-johns_nl_ca');
    const stayDuration = number('stayDuration', 5);
    return (
      <StopoverInfo
        cityName={cityName}
        stayDuration={stayDuration}
        locationId={locationId}
      />
    );
  });
