import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomePage from './home'

export default function Home() {
  return (
    <>
      <Head>
        <title>ASAD HAMID</title>
        <meta name="description" content="CEO | Co-Founder | WebMetric's Digital Pioneer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <HomePage/>
    </>
  )
}
