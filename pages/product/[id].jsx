import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../../styles/Product.module.css'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/cartSlice'

const Product = ({ pizza }) => {
  const [size, setSize] = useState(0)
  const [price, setPrice] = useState(pizza.prices[0])
  const [extras, setExtras] = useState([])
  const [qty, setQty] = useState(1)
  const dispatch = useDispatch()
  const router = useRouter()

  const changePrice = (number) => {
    setPrice(price + number)
  }
  const handleSize = (sizeIndex) => {
    const diff = pizza.prices[sizeIndex] - pizza.prices[size]
    setSize(sizeIndex)
    changePrice(diff)
  }
  const handleChange = (e, option) => {
    const checked = e.target.checked
    if (checked) {
      changePrice(option.price)
      setExtras((prev) => [...prev, option])
    } else {
      changePrice(-option.price)
      setExtras(extras.filter((extra) => extra._id !== option._id))
    }
  }

  const handleClick = () => {
    dispatch(addProduct({ ...pizza, extras, price, qty }))
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} alt='' layout='fill' objectFit='contain' />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>${price}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image
              src='/img/size.png'
              alt=''
              layout='fill'
              objectFit='contain'
            />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image
              src='/img/size.png'
              alt=''
              layout='fill'
              objectFit='contain'
            />
            <span className={styles.number}>Mediun</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
            <Image
              src='/img/size.png'
              alt=''
              layout='fill'
              objectFit='contain'
            />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional toppings</h3>
        <div className={styles.toppings}>
          <div className={styles.options}>
            {pizza.extraOptions.map((option) => (
              <div className={styles.option} key={option._id}>
                <input
                  type='checkbox'
                  id={option.text}
                  name={option.text}
                  className={styles.checkbox}
                  onChange={(e) => handleChange(e, option)}
                />
                <label htmlFor='double'>{option.text}</label>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.add}>
          <input
            onChange={(e) => setQty(e.target.value)}
            type='number'
            defaultValue={1}
            className={styles.qty}
          />
          <button className={styles.button} onClick={handleClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/products/${params.id}`)
  return {
    props: {
      pizza: res.data,
    },
  }
}

export default Product
