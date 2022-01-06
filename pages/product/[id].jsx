import Image from "next/image"
import styles from '../../styles/Product.module.css'

const Product = () => {
    const [size, setSize] = useState(0)
    const pizza = {
        id: 1,
        img: '/img/bbqChicken.png',
        name: '',
        price: [19.9, 23.4, 27.9],
        desc: 'Lorem impsum dolor sit amet, consecter adipicsing elit.'
    }
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={pizza.img} alt='' layout="fill" />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{pizza.name}</h1>
            </div>
        </div>
    )
}

export default Product
