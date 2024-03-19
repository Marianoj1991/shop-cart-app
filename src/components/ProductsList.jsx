import '../styles/ProductList.css'
import ProductsItem from './ProductsItem'

export default function ProductsList({ products = [] }) {
  return (
    <section className='products'>      
      <ul className='ul-list'>
        {products.map((prod) => (
          <ProductsItem
            key={prod.id}
            title={prod.title}
            image={prod.image}
            price={prod.price}
            prod={prod}
          />
        ))}
      </ul>
    </section>
  )
}
