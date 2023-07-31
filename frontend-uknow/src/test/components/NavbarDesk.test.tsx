import { describe, test, expect } from 'vitest'
import { render} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { NavbarDesk } from '../../components/NavbarDesk/NavbarDesk'

describe('NAVBAR BOTTOM', () => {
  describe('Navbar component', () => {
    // beforeEach(() => {
    const { container } = render(
      <MemoryRouter>
        <NavbarDesk />
      </MemoryRouter>
    )
    // })
    test('renders a nav element with a link /home', async () => {
      const link1 = container.querySelector('a')
      expect(link1).toHaveAttribute('href', '/home')
    })

    // test('renders a nav element with a links /courses', async () => {
    //   const { container } = render(
    //     <MemoryRouter>
    //       <NavbarBottom />
    //     </MemoryRouter>
    //   )
    //   const link2 = container.querySelector('a')
    //   expect(link2).toHaveAttribute('href', '/course')
    // })
  })
})
