import Document, { Html, Head, Main, NextScript } from 'next/document';
// import {title } from "next/head";

class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link rel="icon" href="https://www.joinclubhouse.com/static/img/icon_wave.2872aeea710c.png"/>
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap" rel="stylesheet" />
            <title>Clubhouse: Drag-in audio</title>
        </Head>

        <body> 
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument;