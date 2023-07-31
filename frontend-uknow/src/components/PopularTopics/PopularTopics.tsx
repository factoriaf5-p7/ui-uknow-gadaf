import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { TopicChip } from './TopicChip'
import styles from './PopularTopics.module.css'
import { Link } from 'react-router-dom'

export const PopularTopics = () => {
  const [topics, setTopics] = useState<any[]>([])

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await fetch(
          'http://localhost:3000/api/courses/topics'
        )
        const data = await response.json()
        setTopics(data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchTopics()
  }, [])

  return (
    <>
      <Container className={styles.container}>
        <h4 className={styles.sectionTitle}>Popular topics</h4>
        <div className={styles.chips}>
          {topics.slice(0, 10).map((topic, i) => (
            <div key={i}>
              <Link to={`/topic?filter=${topic}`}>
                <TopicChip title={topic} key={i} />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}
