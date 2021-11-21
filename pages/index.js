import Head from 'next/head'
import About from '../components/Sections/Home/About'
import Clients from '../components/Sections/Home/Clients'
import Hero from '../components/Sections/Home/Hero'

export default function Index() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Home - Omnicreativora</title>
      </Head>

      <Hero />
      <About />
      <Clients />

    </div>
  )
}
