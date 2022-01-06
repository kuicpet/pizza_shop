import { useState } from 'react'
import Image from 'next/image'
import styles from '../../styles/Product.module.css'

const Product = () => {
  const [size, setSize] = useState(0)
  const pizza = {
    id: 1,
    img: '/img/bbqChicken.png',
    name: 'CAMPAGOLIA',
    price: [19.9, 23.4, 27.9],
    desc: 'Lorem impsum dolor sit amet, consecter adipicsing elit.',
  }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} alt='' layout='fill' objectFit='contain' />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image
              src='/img/size.png'
              alt=''
              layout='fill'
              objectFit='contain'
            />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image
              src='/img/size.png'
              alt=''
              layout='fill'
              objectFit='contain'
            />
            <span className={styles.number}>Mediun</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
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
            <div className={styles.option}>
              <input
                type='checkbox'
                id='double'
                name='double'
                className={styles.checkbox}
              />
              <label htmlFor='double'>Double Toppings</label>
            </div>
            <div className={styles.option}>
              <input
                type='checkbox'
                id='chesse'
                name='cheese'
                className={styles.checkbox}
              />
              <label htmlFor='cheese'>Extra Cheese</label>
            </div>
            <div className={styles.option}>
              <input
                type='checkbox'
                id='spicy'
                name='spicy'
                className={styles.checkbox}
              />
              <label htmlFor='spicy'>Spicy Sauce</label>
            </div>
            <div className={styles.option}>
              <input
                type='checkbox'
                id='garlic'
                name='garlic'
                className={styles.checkbox}
              />
              <label htmlFor='garlic'>Garlic Sauce</label>
            </div>
          </div>
        </div>
        <div className={styles.add}>
          <input type='number' defaultValue={1} className={styles.qty} />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product
