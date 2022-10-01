import '../styles/globals.css'
import 'nextra-theme-docs/style.css'
import 'react-whatsapp-widget/dist/index.css';

import { WhatsAppWidget } from 'react-whatsapp-widget';


import type { AppProps } from 'next/app'
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Component {...pageProps} />
    <WhatsAppWidget open={false} phoneNumber="+xxxxxxxxx" companyName="SyntropicA" replyTimeText="We'll answer as soon as possible!" message="Hi! How can we help you?" />
  </>
}

export default MyApp
