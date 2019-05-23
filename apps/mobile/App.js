// @flow

import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SearchContext } from '@bucket-list-travel-app/core';

import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <SearchContext.Provider>
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    </SearchContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
