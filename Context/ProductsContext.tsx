import { useRouter } from "next/router";
import { ReactNode } from "react";
import { createContext, useEffect, useState } from "react";
import { Products, ProductsContextType } from "../Interfaces/ProductInterface";
import productsService from "../services/data";

export const ProductContext = createContext({} as ProductsContextType);

interface ProductsProviderProps {
  children: ReactNode;
}

export const ProductProvider = ({ children }: ProductsProviderProps) => {
  const router = useRouter();
  const [products, setProducts] = useState<Products[]>([]);
  const [singleProduct, setSingleProduct] = useState<Products | any>();
  const [cartItems, setCartItems] = useState<Products[]>([]);
  const[query,setQuery]=useState<string>('')

  const fetchProducts = async () => {
    const products = await productsService.getProducts();
    setProducts(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const showProduct = (item: Products) => {
    setSingleProduct(item);
    if (singleProduct) {
      router.push("/product");
    }
  };

  const addToCart = (item: Products) => {
    setCartItems([...cartItems, item]);
  };

  const deleteCartItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id: number) => {
    setCartItems(
      cartItems.map((item) =>
      
        id === item.id ? { ...item, quantity:item.quantity+(item.quantity < 5 ? 1 : 0)} : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCartItems(
      cartItems.map((item) =>
        id === item.id
          ? { ...item, quantity: item.quantity - (item.quantity > 1 ? 1 : 0) }
          : item
      )
    );
  };




  return (
    <ProductContext.Provider
      value={{
        products,
        showProduct,
        singleProduct,
        addToCart,
        cartItems,
        deleteCartItem,
        increaseQuantity,
        decreaseQuantity,
        query,
        setQuery
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
