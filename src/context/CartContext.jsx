import { createContext } from 'react'
import { useCart } from '../hooks/useCart'

export const CartContext = createContext()

export function CartContextProvider({ children }) {
  const { state: cart, addToCart, removeFromCart, clearCart } = useCart();

  console.log(cart);
  

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
