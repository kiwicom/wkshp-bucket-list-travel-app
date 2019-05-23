// @flow

import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Routes } from '@bucket-list-travel-app/navigation';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import SearchScreen from '../screens/SearchScreen';
import ResultsScreen from '../screens/ResultsScreen';

export default createAppContainer(
  createStackNavigator(
    {
      [Routes.SEARCH]: SearchScreen,
      [Routes.RESULTS]: ResultsScreen,
    },
    {
      defaultNavigationOptions: {
        headerTintColor: defaultTokens.paletteProductNormal,
      },
    },
  ),
);
