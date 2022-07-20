import { useContext } from "react";
import CartProduct from "../components/CartProduct";
import Navbar from "../components/Navbar";
import { ProductContext } from "../Context/ProductsContext";
import { ProductsContextType } from "../Interfaces/ProductInterface";
import styles from "../styles/Cart.module.css";

export default function Cart() {
  const { cartItems, deleteCartItem, increaseQuantity, decreaseQuantity } =
    useContext<ProductsContextType>(ProductContext);

  const itemsQuantity = cartItems.map((items) => items.quantity);
  const totalQuantity = itemsQuantity.reduce((a, b) => a + b, 0);
  const allItemsprice = cartItems.map((item) => item.price * item.quantity);

  const totalPrice = allItemsprice.reduce((a, b) => a + b, 0);

  return (
    <>
      <Navbar />
      <div className={styles.cartContainer}>
        <div className={styles.cartItemContainer}>
          <p className={styles.title}>
            Shopping Cart
            <p style={{ float: "right", fontSize: "12px", marginTop: "32px" }}>
              Price
            </p>
          </p>
          <div className={styles.cartItem}>
            {cartItems.map((items) => (
              <CartProduct
              key={items.id}
                id={items.id}
                title={items.title}
                price={items.price}
                image={items.image}
                onDelete={deleteCartItem}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                quantity={items.quantity}
              />
            ))}
          </div>
        </div>
        <div className={styles.cartSubtotal}>
          <p>
            Subtotal({totalQuantity} items): <span>${totalPrice}</span>
          </p>
          <button>Proceed to Buy</button>
        </div>
      </div>
    </>
  );
}
