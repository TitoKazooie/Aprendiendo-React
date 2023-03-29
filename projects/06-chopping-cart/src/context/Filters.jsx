import { createContext, useState } from 'react'

// Crear el conexto
export const FiltersContext = createContext()

// Crear el provider, para proveer el contexto
export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })
  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
