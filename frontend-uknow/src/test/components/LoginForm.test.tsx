import { describe, test, expect, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { LogInForm } from '../../components/LogInForm/LogInForm'
import { Form } from 'react-bootstrap'

describe('LOGIN FORM', () => {
  describe('titles', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <LogInForm />
        </MemoryRouter>
      )
    })

    test('renders Welcome title', () => {
      waitFor(() => {
        const Title = screen.getByText(/Welcome/i)
        expect(Title).toBeInTheDocument()
      })
    })
    test('Component Form mounts properly', () => {
      const wrapper = render(<Form />)
      expect(wrapper).toBeTruthy()
    })
  })
})
