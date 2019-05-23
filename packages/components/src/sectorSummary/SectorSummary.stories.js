// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { text, withKnobs } from '@storybook/addon-knobs';

import SectorSummary from './SectorSummary';

storiesOf('SectorSummary', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const departureInfo = text('departureInfo', 'Tue 21 Jun, 20:40');
    const durationInfo = text('durationInfo', 125);
    const carrierCode = text('carrierCode', 'DY');
    return (
      <SectorSummary
        departureInfo={departureInfo}
        durationInfo={durationInfo}
        carriers={[{ code: carrierCode, name: '' }]}
      />
    );
  });
