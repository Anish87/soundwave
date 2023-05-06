import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar';
import HomeCarousel from '@/components/HomeCarousel';

export default function Home() {
  return (
    <>
      <Head>
        <title>SoundWave Inc.</title>
        <meta name="description" content="A website by On The Pieces." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-dark'>
        <Navbar />
        <HomeCarousel />
      </main>
    </>
  )
}