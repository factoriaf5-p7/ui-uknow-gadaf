import { describe, test, expect} from 'vitest'
import { render } from '@testing-library/react'
import { Form, MemoryRouter } from 'react-router-dom'
import { LogInSignUp } from '../../pages/LogInSignUp/LogInSignUp'

describe('Login & SignUp PAGE', () => {
//   beforeEach(() => {
  render(
    <MemoryRouter>
      <LogInSignUp />
    </MemoryRouter>
  )
  //   })
  test('SignUp & Login contain a form component', () => {
    const wrapper = render(<Form />)
    expect(wrapper).toBeTruthy()
  })
})
