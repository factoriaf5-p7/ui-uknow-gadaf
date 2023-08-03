import { describe, test, expect} from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Categories } from '../../components/Categories/Categories'
import { CategoryElement } from '../../components/Categories/CategoryElement'

describe('CATEGORIES COMPONENT', () => {
  render(
    <MemoryRouter>
      <Categories />
    </MemoryRouter>
  )
  test('component CategoryElement mounts properly', () => {
    const wrapper = render(<CategoryElement category='backend' />)
    expect(wrapper).toBeTruthy()
  })
})
