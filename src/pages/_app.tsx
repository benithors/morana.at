import {ChakraProvider} from '@chakra-ui/react'

import moranaTheme from '../moranaTheme'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={moranaTheme}>
        <Head>
            <title>Morana</title>
           <meta name="viewport" content="initial-scale=1.0, width=device-width, viewport-fit=cover"/>
        </Head>
        <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
