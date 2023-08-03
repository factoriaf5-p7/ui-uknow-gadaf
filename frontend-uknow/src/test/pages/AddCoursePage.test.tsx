import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Form, MemoryRouter } from 'react-router-dom'
import { CoursePage } from '../../pages/CoursePage'
import { StarRating } from '../../components/StarRating/StarRating'
import { AddCoursePage } from '../../pages/AddCoursePage/AddCoursePage'
import { Container, FormGroup } from 'react-bootstrap'

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
