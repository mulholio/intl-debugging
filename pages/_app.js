import React from 'react';
import App, { Container } from 'next/app';
import loadPolyfills from '../loadPolyfills';

loadPolyfills();

// The following line by itself is also sufficient to
// trigger the error:
//
// import('intl');

class MyApp extends App {
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
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
