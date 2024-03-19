import { createContext } from 'react';
import { useFilters } from '../hooks/useFilters';

export const FilterContext = createContext();


export function FilterContextProvider ({children})  {
  
  const { productsFiltered,
    filters,
    categoryUpdater,
    minPriceUpdater,
    filterProducts } = useFilters();

  return (
    <FilterContext.Provider value={{productsFiltered, filters, categoryUpdater, minPriceUpdater, filterProducts}}>
      {children}
    </FilterContext.Provider>
  )

}