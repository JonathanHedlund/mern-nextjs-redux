import React from 'react'

import Head from 'next/head'
import Router from 'next/router'

import LayoutPicker from '../components/LayoutPicker'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <React.Fragment>
      <Head>
        <title>Goals</title>
      </Head>
      <LayoutPicker>
        <Component {...pageProps} />
      </LayoutPicker>
    </React.Fragment>
  ) 
}

export default MyApp
