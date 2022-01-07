import axios from 'axios'
import Head from 'next/head'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'
import styles from '../styles/Home.module.css'

export default function Home({pizzaList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Shop</title>
        <meta name='description' content='best pizza shop in town' />
        <meta name='keyword' content='pizza, shop, best pizza' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Featured />
      <PizzaList pizzaList={pizzaList} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get('http:localhost:3000/api/products')
  return {
    props: {
      pizzaList: res.data
    }
  }
}