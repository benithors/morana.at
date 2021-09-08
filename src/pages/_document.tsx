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
                        href="https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=ABeeZee&display=swap"
                        rel="stylesheet"
                    />

                    <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
                    <link href="/static/favicons/site.webmanifest" rel="manifest" />
                    <link
                        href="/static/favicons/apple-touch-icon.png"
                        rel="apple-touch-icon"
                        sizes="180x180"
                    />
                    <link
                        href="/static/favicons/favicon-32x32.png"
                        rel="icon"
                        sizes="32x32"
                        type="image/png"
                    />
                    <link
                        href="/static/favicons/favicon-16x16.png"
                        rel="icon"
                        sizes="16x16"
                        type="image/png"
                    />
                    <link
                        color="#4a9885"
                        href="/static/favicons/safari-pinned-tab.svg"
                        rel="mask-icon"
                    />
                    <meta content="#ffffff" name="theme-color" />
                    <meta content="#ffffff" name="msapplication-TileColor" />
                    <meta
                        content="/static/favicons/browserconfig.xml"
                        name="msapplication-config"
                    />
                </Head>
                <body style={{overflowX: "hidden", backgroundColor: "white"}}>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}
