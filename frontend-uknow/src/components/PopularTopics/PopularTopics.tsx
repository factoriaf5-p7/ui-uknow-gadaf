import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { TopicChip } from './TopicChip'
import styles from './PopularTopics.module.css'

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
    <>
    <Container className={styles.container}>
      <div className={styles.containerTitle}>
      <h4>Popular topics</h4>
      </div>
      <div className={styles.chips}>
        {topics.slice(0, 10).map((topic, i) => (
          <TopicChip title={topic.name} key={i} />
        ))}
      </div>
    </Container>
    </>
  )
}
