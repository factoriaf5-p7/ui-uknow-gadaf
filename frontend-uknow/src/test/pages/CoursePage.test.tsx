import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { CoursePage } from '../../pages/CoursePage'
import { StarRating } from '../../components/StarRating/StarRating'

describe('COURSES PAGE', () => {
  describe('titles', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <CoursePage />
        </MemoryRouter>
      )
    })

    test('renders title', async () => {
      const title = screen.getByText(/Course/i)
      expect(title).toBeInTheDocument()
    })
  })
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
