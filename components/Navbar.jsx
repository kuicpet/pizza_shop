import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { BiHomeCircle } from 'react-icons/bi'


const Navbar = () => {
  const qty = useSelector((state) => state.cart.qty)
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callBtn}>
          <Image src='/img/telephone.png' alt='' width='32' height='32' />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>+2348057821550</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href='/' passHref>
            <li className={styles.listItem}>
              <BiHomeCircle fontSize={30} fontWeight={100} />
            </li>
          </Link>
        </ul>
      </div>
      {/*<div className={styles.item}>
        <ul className={styles.list}>
          <Link href='/' passHref>
            <li className={styles.listItem}>Homepage</li>
          </Link>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src='/img/logo.png' alt='logo' width='160px' height='69px' />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <Link href='/admin/login' passHref>
            <li className={styles.listItem}>Login</li>
          </Link>
        </ul>
      </div>*/}
      <Link href='/cart' passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src='/img/cart.png' alt='cart' width='30px' height='30px' />
            <div className={styles.counter}>{qty}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Navbar
