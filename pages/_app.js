import 'tailwindcss/tailwind.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/fou3yqu.css" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
