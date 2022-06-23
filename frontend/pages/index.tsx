import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CopyKitt from '../components/CopyKitt'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>CopyKitt Tutorial | AI Generated Marketing</title>
        <meta name="description" content="Generate branding for your product." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CopyKitt></CopyKitt> 
    </div>
  )
}

export default Home
