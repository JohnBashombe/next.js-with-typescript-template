import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import Scaffold from '../components/Scaffold';
import PageMetaData from '../components/PageMetaData';

/**
 * @author Ntavigwa Bashombe
 * @since 0.001
 *
 * @summary This is the main app that imports our styles
 * @returns {JSX.Element}: JSX Code for App
 * @license MIT
 * @version 1.0.0
 */
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <PageMetaData />
      <Scaffold>
        <Component {...pageProps} />
      </Scaffold>
    </>
  );
};

export default MyApp;
