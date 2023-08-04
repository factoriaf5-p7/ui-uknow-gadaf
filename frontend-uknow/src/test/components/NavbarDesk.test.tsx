import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { NavbarDesk } from '../../components/NavbarDesk/NavbarDesk'
import { TokenProvider } from '../../context/TokenContext'

describe('NAVBAR DESK', () => {
  describe('Navbar', () => {
    test('renders a nav', () => {
      const wrapper = render(
        <TokenProvider>
          <NavbarDesk />
        </TokenProvider>)
      expect(wrapper).toBeTruthy()
    })
  })
})
