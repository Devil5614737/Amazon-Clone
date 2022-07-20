import axios from 'axios';
import { Products } from '../Interfaces/ProductInterface';


class ProductsService{
    http=axios.create({
        baseURL:'https://ecommerce-products.p.rapidapi.com'
      
    })

async getProducts(){
    const response=await this.http.get<Products[]>('/products',{
        headers: {
            'X-RapidAPI-Key': '0aa8991588msh298ffca364ebd56p1972a4jsn4d14adcec561',
            'X-RapidAPI-Host': 'ecommerce-products.p.rapidapi.com'
          }
    });
    return response.data
}

}


export default new ProductsService();