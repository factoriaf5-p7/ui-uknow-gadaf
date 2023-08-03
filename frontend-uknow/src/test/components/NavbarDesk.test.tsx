import { describe, test, expect } from 'vitest'
import { render, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { NavbarDesk } from '../../components/NavbarDesk/NavbarDesk'
import { TokenProvider } from '../../context/TokenContext'

describe('NAVBAR DESK', () => {
  describe('Navbar', () => {
    test('renders a nav', async () => {
      const wrapper = render(
        <TokenProvider>
          <NavbarDesk />
        </TokenProvider>)
      expect(wrapper).toBeTruthy()
    })
  })
})
