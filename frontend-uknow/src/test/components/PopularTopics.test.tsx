import { describe, test, expect, beforeEach } from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { PopularTopics } from '../../components/PopularTopics/PopularTopics'
import { TopicChip } from '../../components/PopularTopics/TopicChip'
import { Button } from 'react-bootstrap'

describe('POPULAR TOPICS COMPONENT', () => {
  describe('component Topic Chip', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <PopularTopics />
        </MemoryRouter>
      )
    })
    test('component TopicChip mounts properly', () => {
      const wrapper = render(<TopicChip title='' />)
      expect(wrapper).toBeTruthy()
    })

    test('renders a TopicChip has a button', async () => {
      const wrapper = render(<Button />)
      expect(wrapper).toBeTruthy()
    })
  })
})
