import Filters from "./Filters";

export default function Header({ filters, minPriceUpdater, categoryUpdater }) {
  return (
    <header>
      <Filters
        filters={filters}
        minPriceUpdater={minPriceUpdater}
        categoryUpdater={categoryUpdater}
      />
    </header>
  )
}
