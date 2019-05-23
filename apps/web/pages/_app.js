// @flow

import * as React from 'react';
import { default as NextApp, Container } from 'next/app';
import { SearchContext } from '@bucket-list-travel-app/core';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <SearchContext.Provider>
          <Component {...pageProps} />
        </SearchContext.Provider>
      </Container>
    );
  }
}
