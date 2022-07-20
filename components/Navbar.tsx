import styles from "../styles/Home.module.css";
import Image from "next/image";
import React, { useContext } from "react";
import Link from "next/link";
import { ProductsContextType } from "../Interfaces/ProductInterface";
import { useRouter } from "next/router";
import { ProductContext } from "../Context/ProductsContext";





export default function Navbar() {
  const router = useRouter();
  const { cartItems, setQuery } =
    useContext<ProductsContextType>(ProductContext);

  const user = (typeof window !=='undefined'&& JSON.parse(localStorage.getItem("currentUser") || ""));
  const email = user&&user.email.split("@")[0];



  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    router.push("/auth");
  };
  const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
      setQuery(e.target.value)
  }





  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <Link href="/home">
              <Image
                width={90}
                height={40}
                objectFit="contain"
                src="/logo.svg"
                alt="amazon logo"
              />
            </Link>
          </div>
          <div className={styles.searchBox}>
            <div className={styles.all}>
              <p>All</p>
            </div>
            <input type="text" onChange={handleChange} />
            <div className={styles.searchIcon}>
              <Image
                src="/search.svg"
                alt="search icon"
                width={20}
                height={20}
                objectFit="contain"
              />
            </div>
          </div>
          <p id="btn" className={styles.text}>
            <span className={styles.btn}>Hello,{email}</span>
            <br />
            {user ? (
              <span onClick={handleLogout}>Logout</span>
            ) : (
              <span>Login</span>
            )}
          </p>
          <p className={styles.text2}>
            <span>Returns</span>
            <br />& Orders
          </p>
          <div className={styles.cart}>
            <Link href="/cart">
              <div className={styles.cartIcon}>
                <Image
                  src="/cartIcon.svg"
                  alt="cart icon"
                  width={35}
                  height={30}
                  objectFit="contain"
                />
              </div>
            </Link>
            <p className={styles.title}>Cart</p>
            <p className={styles.count}>{cartItems.length}</p>
          </div>
        </div>
      </nav>
    </>
  );
}
