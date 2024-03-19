import './App.css'
import ProductsList from './components/ProductsList'
import Header from './components/Header'
import { useFilterContext } from './hooks/useFilterContext'
import { Cart } from './components/Cart'
import { CartContextProvider } from './context/CartContext'

function App() {
  const { productsFiltered, filters, categoryUpdater, minPriceUpdater } =
    useFilterContext()

  return (
      <CartContextProvider>
      <header>
        <h1>SHOP-CART APP 🛒</h1>
        <hr />
      </header>
      <main className='main'>
        <Header
          filters={filters}
          categoryUpdater={categoryUpdater}
          minPriceUpdater={minPriceUpdater}
        />
        <ProductsList products={productsFiltered} />
      </main>
        <Cart />
      </CartContextProvider>
  )
}

export default App
