import Layout from '../components/Layout'
import { ThemeProvider } from 'next-themes'
import "../styles/index.css"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
