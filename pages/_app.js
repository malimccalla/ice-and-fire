import App, { Container } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../lib/theme';
import GlobalStyles from '../lib/global.css';

export default class IceAndFireApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
            <Component {...pageProps} />
          </>
        </ThemeProvider>
      </Container>
    );
  }
}
