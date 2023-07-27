import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { TopicChip } from './TopicChip'

export const PopularTopics = () => {
  const [topics, setTopics] = useState<any[]>([])

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/courses')
        const data = await response.json()
        setTopics(data.data)
      } catch (error) {
        console.log('No se encuentra ese tema por su:', error)
      }
    }
    fetchTopics()
  }, [])

  return (
    <Container>
      <h2>Popular topics</h2>
      <div>
        {topics.map((topic) => (
          <TopicChip key={topic.id} title={topic.name} />
        ))}
      </div>
    </Container>
  )
}

{
  /* <TopicChip title='CSS'/> */
}
