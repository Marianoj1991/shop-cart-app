import { useReducer } from 'react'
import { initialState, cartReducer } from '../reducer/cartReducer'

export function useCart() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product
    })
  }

  const removeFromCart = (id) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: id
    })
  }

  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART'
    })
  }
  
  
  return {
    state, addToCart, removeFromCart, clearCart
  }
}
