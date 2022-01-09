import { useState } from 'react'
import styles from '../styles/OrderDetail.module.css'

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState('')
  const [address, setAddress] = useState('')
  const handleClick = () => {
    createOrder({ customer, address, total,  paymentMethod: 0 })
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>You will pay ${total} on delivery</h1>
        <div className={styles.item}>
          <label className={styles.label}>Name</label>
          <input
            placeholder='e.g John Doe'
            type='text'
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
            required
          />
        </div>

        <div className={styles.item}>
          <label className={styles.label}>Address</label>
          <input
            placeholder='e.g H2 Off Road T,Lagos Island'
            type='text'
            className={styles.input}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <button className={styles.button} onClick={handleClick}>
          Place Order
        </button>
      </div>
    </div>
  )
}

export default OrderDetail
