// @flow

import * as React from 'react';
import { Text } from '@kiwicom/universal-components';
import { format } from 'date-fns';

import EditContainer from './EditContainer';

type Props = {|
  +date: Date,
|};

export default function DateContainer({ date }: Props) {
  return (
    <EditContainer>
      <Text size="large">{format(date, 'PPPP')}</Text>
    </EditContainer>
  );
}
