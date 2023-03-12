import React, {createContext, useState, useEffect} from 'react'
import ProductModel from './../model/products';
import CartModel from './../model/carts';


interface ICartContext<T>{
  addToCart: (product: T, id: number) => void;
  cart: CartModel[];
  removeFromCart: (id:number) => void;
  clearCart: () => void;
  increaseAmount: (id:number) => void;
  decreaseAmount: (id:number) => void;
  itemAmount: number;
  total:number;
}

//create context 
export const CartContext = createContext<ICartContext<ProductModel | CartModel>>({
  addToCart : () => {},
  cart: [],
  removeFromCart: () => {},
  clearCart: () => {},
  increaseAmount: () => {},
  decreaseAmount:()=> {},
  itemAmount: 0,
  total:0
});

type CartProviderProps = {
  children: React.ReactNode
}

export const CartProvider = ({children}: CartProviderProps) => {
  // carts state
  const [cart, setCart] = useState<CartModel[]>([]);
  // CartItemAmount State
  const [itemAmount, setItemAmount] = useState(0);
  //total price state
  const [total, setTotal] = useState(0);

   //Update total price
   useEffect(()=> {
    if (cart) {
      const price = cart.reduce((accumulator: number, currentItem: CartModel) => {
        return accumulator + currentItem.price * currentItem.amount;
      }, 0);
      setTotal(price);
    }
  }, [cart]);


  //Update item quantity /amount
  useEffect(()=> {
    if (cart) {
      const amount = cart.reduce((accumulator: number, currentItem: CartModel) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart])

  //Add to cart (add productitem to cart)
  const addToCart= (product: ProductModel| CartModel , id:number) => {
    // console.log( `item ${id} added to the cart`);
    const newItem = {...product, amount: 1};

    // check if item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    
   if (cartItem) {
    const newCart = [...cart].map((item) => {
      if (item.id === id) {
        return {...item, amount: cartItem.amount + 1}
      }else {
        return item;
      }
    });
    setCart(newCart);
   } else {
    setCart([...cart, newItem]);
   }
  };
  // console.log(cart);

  //Remove from cart
  const removeFromCart = (id:number) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  //Clearing the Cart
  const clearCart = () => {
    setCart([]);
  }

  //increasing quantity
  const increaseAmount = (id: number) => {
    const cartItem = cart.find((item) => item.id === id);
  
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id){
          return {...item, amount: cartItem.amount + 1}
        } else {
          return item;
        }
      });
      setCart(newCart);
      addToCart(cartItem, id);
    }
    
    
  };

  // decreasing quantity
  const decreaseAmount = (id: number) => {
    const cartItem = cart.find((item) => item.id === id);
  
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id){
          return {...item, amount: cartItem.amount - 1}
        } else {
          return item;
        }
      });
      setCart(newCart);
      //check if quantity is below 1 and action a remove
      if (cartItem.amount < 2) {
        removeFromCart(id);
      }
    }
  }
  
  return (
    <CartContext.Provider 
    value={{
      cart,
       addToCart, 
       removeFromCart,
        clearCart, 
        increaseAmount, 
        decreaseAmount,
        itemAmount,
        total
      }}
      >{children}
      </CartContext.Provider>
  )
}

export default CartProvider