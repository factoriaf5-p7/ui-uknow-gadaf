import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { SearchBar } from '../../components/SearchBar/SearchBar'

function toHaveAttribute (element: Element | null, attributeName: string, attributeValue?: string) {
  if (!element) {
    return false
  }
  const attribute = element.getAttribute(attributeName)
  if (attributeValue === undefined) {
    return attribute !== null
  }
  return attribute === attributeValue
}

describe('SearchBar', () => {
  test('renders an input field to search', async () => {
    const { container } = render(
      <MemoryRouter>
        <SearchBar onSearch={function (): void {
          throw new Error('Function not implemented.')
        }}
        />
      </MemoryRouter>
    )
    test('renders an input field to search', async () => {
      const searchBar = container.querySelector('input')
      expect(searchBar).toBeTruthy() // Check if the input field exists
      expect(toHaveAttribute(searchBar, 'placeholder', 'Search...')).toBe(true)
    })
  })
})
