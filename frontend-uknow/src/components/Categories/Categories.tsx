import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { CategoryElement } from './CategoryElement'
import styles from './Categories.module.css'

export const Categories = () => {
  const [topics, setTopics] = useState<any[]>([])

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await fetch(
          'http://localhost:3000/api/courses/categories'
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

      <Container>
        <h4 className={styles.sectionTitle}>Categories</h4>
        <div className='d-flex flex-wrap justify-content-center' style={{ gap: 10 }}>
          {topics.map((category, i) => (
            <div key={i}>
              <CategoryElement category={category} />
            </div>
          ))}
        </div>
      </Container>

    </>
  )
}
