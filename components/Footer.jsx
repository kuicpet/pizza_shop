import Image from 'next/image'
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src='/img/bg.png' alt='' layout='fill' objectFit='cover' />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>OH YES, WE BAKED SLICE OF PIZZA</h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR PIZZA SHOPS</h1>
                    <p className={styles.text}>
                        No 52 Don Road, #304
                        <br/> New York, 85023
                        <br/> (604) 875-7884
                    </p>
                    <p className={styles.text}>
                        No 52 Don Road, #304
                        <br/> New York, 85023
                        <br/> (604) 875-7884
                    </p>
                    <p className={styles.text}>
                        No 52 Don Road, #304
                        <br/> New York, 85023
                        <br/> (604) 875-7884
                    </p>
                    <p className={styles.text}>
                        No 52 Don Road, #304
                        <br/> New York, 85023
                        <br/> (604) 875-7884
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p>MONDAY - FRIDAY <br/>9:00 - 22: 00</p>
                    <p>SATURDAY - SUNDAY <br/>12:00 - 24: 00</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
