import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Shop</title>
        <meta name='description' content='best pizza shop in town' />
        <meta name='keyword' content='pizza, shop, best pizza' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      Homepage
    </div>
  )
}
