import Image from 'next/image'
import styles from '../styles/PizzaCard.module.css'

const PizzaCard = () => {
    return (
        <div className={styles.container}>
            <Image src='/img/bbqChicken.png' alt='' width='500' height='500' objectFit='contain' />
            <h1 className={styles.title}>FIORI DI ZUCCA</h1>
            <span className={styles.price}>$19.90</span>
            <p className={styles.desc}>Lorem ispum sjjjy zjdbhhd...</p>
        </div>
    )
}

export default PizzaCard
