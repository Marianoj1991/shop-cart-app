import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icons'
import '../styles/cart.css'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export function Cart() {
  const { cart, removeFromCart, clearCart, addToCart } = useContext(CartContext)

  const handleRemoveFromCart = (id) => {
    removeFromCart(id)
  }

  const handleClearCart = () => {
    clearCart();
  }

  return (
    <>
      <div>
        <label
          htmlFor='cart-input'
          className='cart-button'
        >
          <CartIcon />
        </label>
        <input
          className='input-element'
          type='checkbox'
          id='cart-input'
        />
        <aside className='cart'>
          <ul className='cart-container'>
            {cart.map((prod) => (
              <li
                className='cart-item'
                key={prod.id}
              >
                <img
                  src={prod.image}
                  alt={prod.title}
                  className='cart-image'
                />
                <p>
                  <span className='prod-title'>{prod.title}</span> - $
                  {prod.price}
                </p>
                <div>
                  <span>Quantity: {prod.quantity} </span>
                  <button onClick={() => addToCart(prod)}>+</button>
                </div>
                <button onClick={() => handleRemoveFromCart(prod.id)}>
                  <RemoveFromCartIcon />
                </button>
              </li>
            ))}
          </ul>
          <footer>
            <button className='clear-button' onClick={handleClearCart} >
              <ClearCartIcon />
            </button>
          </footer>
        </aside>
      </div>
    </>
  )
}
