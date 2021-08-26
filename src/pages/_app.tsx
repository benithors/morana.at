import {ChakraProvider} from '@chakra-ui/react'

import Head from "next/head";
import moranaTheme from "../../styles/moranaTheme";

function MyApp({Component, pageProps}) {
    return (
        <ChakraProvider resetCSS theme={moranaTheme}>
            <Head>
                <title>Morana</title>
                <meta name="viewport" content="width=device-width, height=device-height"/>
            </Head>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp
