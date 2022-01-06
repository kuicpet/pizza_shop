import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Best Pizza In Town</h1>
      <p className={styles.desc}>Lorem picsus enter hhet uusg ngsht best pizza in toenmshh hhsjjsnh nsyushbdvsgub n asysajab</p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  )
}

export default PizzaList
