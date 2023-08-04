import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Auth } from '../../pages/Auth/Auth'

describe('HOMEPAGE', () => {
  describe('titles', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <Auth />
        </MemoryRouter>
      )
    })

    test('renders Welcome title', () => {
      waitFor(() => {
        const Title = screen.getByText(/Welcome/i)
        expect(Title).toBeInTheDocument()
      })
    })
  })
})
