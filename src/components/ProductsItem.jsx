import { useContext } from 'react'
import { AddToCartIcon } from './Icons'
import { CartContext } from '../context/CartContext'

export default function ProductsItem({ prod, title, image, price }) {

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(prod)
  }

  return (
      <li className='product-item'>
        <img
          src={image}
          alt={title}
        />
        <h3>{title}</h3>
        <p>
          <strong>Price: </strong>
          {price}
        </p>
        <button onClick={handleAddToCart}>
          <AddToCartIcon />
        </button>
      </li>
  )
}
