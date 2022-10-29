import '../styles/globals.css'
import { AppProps } from 'next/app'
import React from 'react'

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
