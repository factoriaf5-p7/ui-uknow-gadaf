import { describe, test, expect, beforeEach } from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { PopularCourses } from '../../components/PopularCourses/PopularCourses'
import { Link } from 'react-bootstrap-icons'
import { AllCoursesCard } from '../../components/AllCourses/AllCoursesCard'

describe('POPULAR COURSES COMPONENT', () => {
  describe('component CourseCard', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <PopularCourses />
        </MemoryRouter>
      )
    })
    test('component CourseCard mounts properly', () => {
      const wrapper = render(<AllCoursesCard image='' rating='' title='' price={100} />)
      expect(wrapper).toBeTruthy()
    })

    test('renders a CourseCard with a link /course', async () => {
      const wrapper = render(<Link to='/course' />)
      expect(wrapper).toBeTruthy()
    })
  })
})
