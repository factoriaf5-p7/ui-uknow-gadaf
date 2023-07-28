import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { HomePage } from '../pages/HomePage/HomePage'
// import { MemoryRouter } from 'react-router-dom'
// import { HomePage } from '../pages/HomePage'

describe('HOMEPAGE', () => {
  describe('HomePage PARTS', () => {
    beforeEach(() => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <HomePage />
        </MemoryRouter>
      )
    })

    test('renders section titles, Categories, Most Popular, All Courses', async () => {
      await waitFor(() => {
        const categoriesTitle = screen.getByText(/Categories/i)
        expect(categoriesTitle).toBeInTheDocument()

        const popularTitle = screen.getByText(/Most popular/i)
        expect(popularTitle).toBeInTheDocument()

        const allcoursesTitle = screen.getByText(/All Courses/i)
        expect(allcoursesTitle).toBeInTheDocument()
      })
    })
  })
})
