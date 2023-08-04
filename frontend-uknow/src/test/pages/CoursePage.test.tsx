import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { StarRating } from '../../components/StarRating/StarRating'
import CoursePage from '../../pages/CoursePage/CoursePage'
import '@testing-library/jest-dom'

describe('COURSES PAGE', () => {

  describe('render components ', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <CoursePage />
        </MemoryRouter>
      )
    })
    test('component StarRating mounts properly', () => {
      const wrapper = render(<StarRating />)
      expect(wrapper).toBeTruthy()
    })
  })
})
