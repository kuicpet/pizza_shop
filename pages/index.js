import axios from 'axios'
import Head from 'next/head'
import { useState } from 'react'
import Add from '../components/Add'
import AddButton from '../components/AddButton'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'
import styles from '../styles/Home.module.css'
import db from '../utils/connectDb'

export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true)
  // console.log(pizzaList)
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Shop</title>
        <meta name='description' content='best pizza shop in town' />
        <meta name='keyword' content='pizza, shop, best pizza' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Featured />
      {admin && <AddButton setClose={setClose} />}
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose} />}
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  db.connect()
  const myCookie = ctx.req?.cookies || ''
  let admin = false
  if (myCookie.token === process.env.TOKEN) {
    admin = true
  }
  const res = await axios.get('http://localhost:3000/api/products')
  return {
    props: {
      pizzaList: res?.data,
      admin,
    },
  }
}
