import { useState } from "react"
import PRODUCTSMOCK from '../mocks/product.json'

export function useFilters() {
  
  const [products] = useState(PRODUCTSMOCK) 
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const categoryUpdater = (category) => {
    setFilters((prevState) => ({
      ...prevState,
      category
    }))
  }

  const minPriceUpdater = (minPrice) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice
    }))
  }

  const filterProducts = (products) => {
    return products.filter(
      (prod) => 
      ( 
        prod.price >= filters.minPrice && ( filters.category === 'all' ||
        prod.category === filters.category
        )
      )
    )
  }

  const productsFiltered = filterProducts(products);

  return {
    productsFiltered,
    filters,
    categoryUpdater,
    minPriceUpdater,
    filterProducts
  }
}