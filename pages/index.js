import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Report from '@components/Report'
import Image from 'next/image'
import profilePic from '../public/me.png'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>VISITOR INTERROGATION REPORT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/*<Header title="Welcome to my app!" />*/}
        {/*<Image src={profilePic} alt="Picture of the author"/>*/}
        
        <Report/>
      </main>

      <Footer />
    </div>
  )
}
