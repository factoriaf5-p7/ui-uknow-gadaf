import { describe, test, expect, beforeEach } from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { MyCourses } from '../../pages/MyCourses/MyCourses'
import { CreatedCourses } from '../../components/CreatedCourses/CreatedCourses'
import { BoughtCourses } from '../../components/BoughtCourses/BoughtCourses'

describe('MY COURSES PAGE', () => {
  

  describe('render components ', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <MyCourses />
        </MemoryRouter>
      )
    })
    test('component CreatedCourses mounts properly', () => {
      const wrapper = render(<CreatedCourses />)
      expect(wrapper).toBeTruthy()
    })
    test('Component BoughtCourses mounts properly', () => {
      const wrapper = render(<BoughtCourses />)
      expect(wrapper).toBeTruthy()
    })
  })
})
