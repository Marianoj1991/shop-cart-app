
import '../styles/filters.css';

export default function Filters({filters, minPriceUpdater, categoryUpdater}) {

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    categoryUpdater(newCategory);
  }

  const handleMinPriceChange = (e) => {
    const newMinPrice = e.target.value;
    minPriceUpdater(newMinPrice);
  }

  return (
    <header className='header'>
      <div className='header-section'>
        <label htmlFor='min-input'>Price: </label>
        <input
          onChange={handleMinPriceChange}
          id='min-input'
          type='range'
          min='0'
          max='999'
          value={filters.minPrice}
        />
        <label>{ filters.minPrice }</label>
      </div>
      <div className='header-section'>
        <label htmlFor='category-input'>Category</label>
        <select
          onChange={handleCategoryChange}
          id='category-input'
        >
          <option value='all'>All </option>
          <option value="men's clothing">Men's clothing </option>
          <option value='jewelery'>Jewelery</option>
          <option value="women's clothing">Women's clothing</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>
    </header>
  )
}
