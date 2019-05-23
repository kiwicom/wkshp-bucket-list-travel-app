// @flow

import * as React from 'react';
import { Text } from '@kiwicom/universal-components';
import { Flag } from '@bucket-list-travel-app/components';

import { type Stopover as StopoverType } from './SearchContext';
import EditContainer from './EditContainer';

type Props = {|
  +stopover: StopoverType,
|};

export default function Stopover({ stopover }: Props) {
  return (
    <EditContainer>
      <Flag countryCode={stopover.countryCode} />
      <Text size="large" numberOfLines={1}>{`${stopover.cityName} (${
        stopover.id
      })`}</Text>
    </EditContainer>
  );
}
