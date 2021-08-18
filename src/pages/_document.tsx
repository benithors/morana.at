import NextDocument, {Head, Html, Main, NextScript} from 'next/document'

export default class Document extends NextDocument {
    render() {
        return (
            <Html>
                <Head>

                    <meta charSet="utf-8"/>

                    <meta name="apple-mobile-web-app-status-bar-style" content="#4CE6C4"/>
                    <meta name="theme-color" content="#4CE6C4"/>
                    <meta name="description" content="Oana Moraru - Agile Consultant • Freelancer"/>
                    <meta name="apple-mobile-web-app-title" content="Morana"/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Fugaz+One"
                        rel="stylesheet"
                    />

                    <link
                        href="https://fonts.googleapis.com/css2?family=ABeeZee:400"
                        rel="stylesheet"
                    />


                </Head>
                <body >
                <Main />
                <NextScript/>
                </body>
            </Html>
        )
    }
}
