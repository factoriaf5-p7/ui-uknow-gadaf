import { describe, test, expect, beforeEach } from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Profile } from '../../pages/ProfilePage/ProfilePage'
import { ProfileActions } from '../../components/ProfileActions/ProfileActions'
import { ProfileContact } from '../../components/ProfileContact/ProfileContact'

describe('PROFILE PAGE', () => {
  describe('render components ', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <Profile />
        </MemoryRouter>
      )
    })
    // test('component ProfileActions mounts properly', () => {
    //   const wrapper = render(<ProfileActions />)
    //   expect(wrapper).toBeTruthy()
    // })

    test('Component ProfileContact mounts properly', () => {
      const wrapper = render(<ProfileContact />)
      expect(wrapper).toBeTruthy()
    })
  })
})
