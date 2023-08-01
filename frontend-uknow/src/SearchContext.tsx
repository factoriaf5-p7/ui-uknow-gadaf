import React, { createContext, useContext, useState } from 'react'

interface SearchContextType {
  searchKeywords: string;
  setSearchKeywords: (keywords: string) => void;
}

const SearchContext = createContext<SearchContextType>({
  searchKeywords: '',
  setSearchKeywords: () => {}
})

export function useSearchContext () {
  return useContext(SearchContext)
}

export function SearchContextProvider ({ children }: { children: React.ReactNode }) {
  const [searchKeywords, setSearchKeywords] = useState('')

  return (
    <SearchContext.Provider value={{ searchKeywords, setSearchKeywords }}>
      {children}
    </SearchContext.Provider>
  )
}
