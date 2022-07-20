

export interface Products{
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    quantity:number
    
}


export interface ProductsContextType{
    products:Products[],
    cartItems:Products[],
    showProduct:(items:Products)=>void,
    singleProduct:(items:Products)=>void,
    addToCart:(item:Products)=>void,
    deleteCartItem:(id:number)=>void,
    increaseQuantity:(id:number)=>void,
    decreaseQuantity:(id:number)=>void,
    query:string,
    setQuery:(query:string)=>void
}