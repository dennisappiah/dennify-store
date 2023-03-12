import React, {createContext, useState, useEffect} from 'react'
import ProductModel from './../model/products';

//create context
export const ProductContext = createContext<{ products: ProductModel[] }>({ products: [] });

type ProductProviderProps = {
  children: React.ReactNode
}

const ProductProvider = ({children}: ProductProviderProps) => {
  //products state
  const [products, setProducts] = useState([]);

  //fetch products to update the state
  useEffect(() => {
    const fetchProducts = async() => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      // console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);


  return (
    <ProductContext.Provider value={{ products}}>{children}</ProductContext.Provider>
  )
}

export default ProductProvider