import { NextPage } from "next";
import React from "react";
import { useContext } from "react";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import Products from "../components/ProductCard";

import { ProductContext } from "../Context/ProductsContext";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const {products,query } = useContext(ProductContext);







 
  return (
    <>
    <header>
<Navbar/>
    </header>
    <Carousel/>
    <main className={styles.main}>
      <div className={styles.wrapper}>
        {products.filter((item)=>{
          if(query===""){
            return item
          }else if(item.title.toLowerCase().includes(query.toLowerCase())){
            return item
          }
        }).map(items=><Products key={items.id} image={items.image} price={items.price} title={items.title} items={items}/>)}
        
        
      </div>
    </main>
    </>
  );
};

export default Home;
