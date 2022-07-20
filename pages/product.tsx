import Image from 'next/image';

import { useContext} from 'react';
import Navbar from '../components/Navbar';
import { ProductContext } from '../Context/ProductsContext';
import styles from '../styles/Product.module.css';

export default function Product(){

    const {singleProduct,addToCart}=useContext<any>(ProductContext);


 
    return(
        <>
        <Navbar/>
      <div className={styles.container}>
        <div className={styles.wrapper}>
            {singleProduct&&<><div className={styles.productImage}>
                <Image objectFit='contain' priority width={300} height={300} src={singleProduct.image} alt='fsd'/>
            </div>
            <div className={styles.productInfo}>
                <p className={styles.title}>{singleProduct.title}</p>
                <p className={styles.price}>${singleProduct.price}</p>
                <p className={styles.desc}>{singleProduct.description}</p>
                <div className={styles.buttons}>
                    <button onClick={()=>addToCart(singleProduct)} className={styles.cartButton}>Add to Cart</button>
                </div>
            </div></>}
        </div>
      </div>
      </>
    )
}