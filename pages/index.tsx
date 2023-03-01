import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '@components/Header'
import Social from '@components/Social'
import Bio from '@components/Bio'
import { Switch } from '@headlessui/react'
import { useState } from 'react'

const Home: NextPage = () => {
  const [enableDarkMode, setEnableDarkMode] = useState(true)

  return (
    <div className={`${enableDarkMode ? 'dark' : ''}`}>

      <Switch
        checked={enableDarkMode}
        onChange={setEnableDarkMode}
        className={`${enableDarkMode ? 'bg-gradient-to-r from-cyan-600 to-blue-600' : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
          } fixed inline-flex h-6 w-11 items-center rounded-full right-2 top-2 z-50`}
      >
        <span className="sr-only">Dark mode</span>
        <span
          className={`${enableDarkMode ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white`}
        />
      </Switch>

      <div className='flex transition-colors duration-700 dark:bg-slate-800'>
        <div className='w-1/4'></div>
        <div className='md:w-2/4'>
          <Head>
            <title>Alison Silva Web developer Website</title>
            <meta name="description" content="Alison Silva Website" />

            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
            <link rel="manifest" href="/favicon/site.webmanifest"></link>
          </Head>

          <main className="flex flex-1 flex-col justify-center items-center min-h-screen py-1 px-2">
            <Header />
            <Social />
            <Bio />

          </main>

          <footer className="flex flex-1 justify-center items-center p-3 border-t-[1px] border-t-gray-200 dark:text-white">
            From Lisbon 🇵🇹 with love{' '} ❤️
          </footer>
        </div>
        <div className='w-1/4'></div>

      </div>

    </div>
  )
}

export default Home
