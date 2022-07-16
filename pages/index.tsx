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

      <main className={styles.main}>
        <Header />
        <Social />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          From Lisbon 🇵🇹 with love{' '} ❤️
        </a>
      </footer>
    </div>
  )
}

export default Home
