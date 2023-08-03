import { describe, test, expect, beforeEach } from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { LandingPage } from '../../pages/LandingPage/LandingPage'
import { ButtonP } from '../../components/ButtonP'
import { ButtonS } from '../../components/ButtonS'

describe('PROFILE PAGE', () => {
  describe('render components ', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <LandingPage />
        </MemoryRouter>
      )
    })
    test('component ProfileActions mounts properly', () => {
      const wrapper = render(<ButtonP text='' />)
      expect(wrapper).toBeTruthy()
    })
    test('Component ProfileContact mounts properly', () => {
      const wrapper = render(<ButtonS text='' />)
      expect(wrapper).toBeTruthy()
    })
  })
})
