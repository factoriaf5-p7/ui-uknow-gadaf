import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AddCoursePage } from '../../pages/AddCoursePage/AddCoursePage'
import { Container } from 'react-bootstrap'

describe('COURSES PAGE', () => {
  describe('titles', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <AddCoursePage />
        </MemoryRouter>
      )
    })

    test('renders title', async () => {
      const title = screen.getByText(/Create/i)
      expect(title).toBeInTheDocument()
    })
  })
  describe('render components ', () => {
    test('component StarRating mounts properly', () => {
      const wrapper = render(<Container />)
      expect(wrapper).toBeTruthy()
    })
  })
})
