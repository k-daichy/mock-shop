import 'tailwindcss/tailwind.css'
import React from 'react';
import Head from "next/head";
import {CartProvider} from 'use-shopping-cart'
import getStripe from '../utils/get-stripejs'
import * as config from '../config'
import type {AppProps} from 'next/app'

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    <CartProvider
      mode="checkout-session"
      stripe={getStripe()}
      currency={config.CURRENCY}
    >
      <React.Fragment>
        <Head>
          <title>My page</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
          <Component {...pageProps}/>
      </React.Fragment>
    </CartProvider>
  );
}
