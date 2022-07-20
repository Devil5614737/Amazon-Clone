import Image from 'next/image';
import React, { useContext } from 'react';
import { ProductContext } from '../Context/ProductsContext';
import { Products, ProductsContextType } from '../Interfaces/ProductInterface';
import styles from '../styles/Home.module.css';

interface ProductsProps{
    title:string,
    image:string,
    price:number,
    items:Products
}


export default function ProductCard({title,image,price,items}:ProductsProps){
    
const {showProduct}=useContext<ProductsContextType>(ProductContext);




    return (
        <div className={styles.card}>

            <Image onClick={()=>showProduct(items) } priority  width={0} height={0} objectFit='contain' layout='responsive' src={image} alt={title}/>
            <div className={styles.productInfo}>
            <p className={styles.productName}>{title.substring(0,35) + '...'}</p>
         <p className={styles.productPrice}>${price}</p>
            </div>
        </div>
    )
}