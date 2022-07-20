import Image from 'next/image';
import styles from '../styles/Cart.module.css';


interface CartItemProps{
    id:number,
    title:string,
    price:number,
    image:string,
    quantity:number
    onDelete:(id:number)=>void,
    increaseQuantity:(id:number)=>void,
    decreaseQuantity:(id:number)=>void
}
export default function CartProduct ({quantity,id,title,price,image,onDelete,increaseQuantity,decreaseQuantity}:CartItemProps){

    return (
        <div className={styles.product}>
            <div className={styles.left}>
               <div className={styles.productImage}>
                <Image height={150} width={150} src={image} objectFit='contain' alt={title}/>
                </div>
                <div className={styles.productInfo}>
                    <p className={styles.title}>{title}</p>
                    <div className={styles.qty}>
                    <label htmlFor="qty">Qty:</label>

                   <button  onClick={()=>increaseQuantity(id)}>+</button>
                   <p className={styles.quantityCount}>{quantity}</p>
                   <button onClick={()=>decreaseQuantity(id)}>-</button>
                    <p onClick={()=>onDelete(id)}>Delete</p>
                    </div>
               
               </div>
            </div>
            <div className={styles.right}>
                <p>${price}</p>
            </div>
        </div>
    )
}