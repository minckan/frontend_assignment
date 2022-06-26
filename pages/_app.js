import Layout from '../components/Layout'
import { globalStyles } from '../styles/globals'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {globalStyles}
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
