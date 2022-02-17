import { Provider } from 'react-redux';

import Head from 'next/head'
import Router from 'next/router'

import { store } from '../app/store.tsx';

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import LayoutPicker from '../components/LayoutPicker'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Provider store={store}>
        <Head>
          <title>Goals</title>
        </Head>
        <LayoutPicker>
            <Component {...pageProps} />
        </LayoutPicker>
      </Provider>
      <ToastContainer />
    </>
  ) 
}

export default MyApp
