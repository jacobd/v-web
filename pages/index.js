import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'
import profilePic from '../public/me.png'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <Image src={profilePic} alt="Picture of the author" />
        <p className="description">
          Hallo there
        </p>
      </main>

      <Footer />
    </div>
  )
}
