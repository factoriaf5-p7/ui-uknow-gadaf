import { describe, test, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { NavbarBottom } from '../components/NavbarBottom/NavbarBottom'

describe('NAVBAR BOTTOM', () => {
  describe('Navbar component', () => {
    // beforeEach(() => {
    const { container } = render(
      <MemoryRouter>
        <NavbarBottom />
      </MemoryRouter>
    )
    // })
    test('renders a nav element with a link /home', async () => {
      const link1 = container.querySelector('a')
      expect(link1).toHaveAttribute('href', '/home')
    })

    // test('renders a nav element with a links /courses', async () => {
    //   const link2 = container.querySelector('a')
    //   expect(link2).toHaveAttribute('href', '/course')
    // })
  })
})
