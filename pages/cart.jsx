import styles from '../styles/Cart.module.css'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { reset } from '../redux/cartSlice'
import OrderDetail from '../components/OrderDetail'

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const [open, setOpen] = useState(false)
  const [cash, setCash] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()

  const createOrder = async (data) => {
    try {
      const res = await axios.post('http://localhost:3000/api/orders', data)
      if (res.status === 201) {
        dispatch(reset())
        router.push(`/orders/${res.data._id}`)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quatity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.products.length === 0 && <p>Cart is Empty</p>}
            {cart.products.map((product) => (
              <tr className={styles.tr} key={product._id}>
                <td>
                  <div className={styles.imgContainer}>
                    <Image
                      src={product.img}
                      alt=''
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>{product.title}</span>
                </td>
                <td>
                  <span className={styles.extra}>
                    {product.extras.map((extra) => (
                      <span key={extra._id}>{extra.text},</span>
                    ))}
                  </span>
                </td>
                <td>
                  <span className={styles.price}>${product.price}</span>
                </td>
                <td>
                  <span className={styles.qty}>{product.qty}</span>
                </td>
                <td>
                  <span className={styles.total}>
                    ${product.price * product.qty}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>SubTotal:</b>${cart.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.0
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${cart.total}
          </div>
          {open ? (
            <div className={styles.paymentMethods}>
              <button className={styles.payBtn} onClick={() => setCash(true)}>
                CASH ON DELIVERY
              </button>
              <button className={styles.payBtn}>PAY TO BANK ACCOUNT</button>
            </div>
          ) : (
            <button onClick={() => setOpen(true)} className={styles.button}>
              CHECKOUT NOW!
            </button>
          )}
        </div>
      </div>
      {cash && <OrderDetail total={cart.total} createOrder={createOrder} />}
    </div>
  )
}

export default Cart
