import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '@components/Header'
import Social from '@components/Social'

const Home: NextPage = () => {
  return (
    <div className="dark:bg-slate-800">
      <Head>
        <title>Alison Silva Website</title>
        <meta name="description" content="Alison Silva Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-1 flex-col justify-center items-center min-h-screen py-1 px-2">
        <Header />
        <Social />
      </main>

      <footer className="flex flex-1 justify-center items-center p-3 border-t-[1px] border-t-gray-200">
        From Lisbon 🇵🇹 with love{' '} ❤️
      </footer>
    </div>
  )
}

export default Home
