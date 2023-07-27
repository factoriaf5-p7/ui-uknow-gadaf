import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
// import { MemoryRouter } from 'react-router-dom'
// import { HomePage } from '../pages/HomePage'

describe('HOMEPAGE', () => {
  describe('HomePage components', () => {
    // beforeEach(() => {
    //   render(
    //     <MemoryRouter initialEntries={['/']}>
    //       <HomePage />
    //     </MemoryRouter>
    //   )
    // })

    test('Renders title Categories', async () => {
      await waitFor(() => {
        const categoriesText = screen.getByText(/Categories/i)
        expect(categoriesText).toBeInTheDocument()

        // const allBeersLink = allBeersText.closest('a')
        // expect(allBeersLink).toHaveAttribute('href', '/beers')
      })
    })
  })
})
