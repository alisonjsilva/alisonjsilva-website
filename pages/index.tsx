import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '@components/Header'
import Social from '@components/Social'
import Bio from '@components/Bio'

const Home: NextPage = () => {
  return (
    <div className="dark:bg-slate-800">
      <div className='flex'>
        <div className='w-1/4'></div>
        <div className='md:w-2/4'>
          <Head>
            <title>Alison Silva Website</title>
            <meta name="description" content="Alison Silva Website" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className="flex flex-1 flex-col justify-center items-center min-h-screen py-1 px-2">
            <Header />
            <Social />
            <Bio />

          </main>

          <footer className="flex flex-1 justify-center items-center p-3 border-t-[1px] border-t-gray-200">
            From Lisbon 🇵🇹 with love{' '} ❤️
          </footer>
        </div>
        <div className='w-1/4'></div>

      </div>

    </div>
  )
}

export default Home
