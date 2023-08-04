import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { CategoryElement } from './CategoryElement'
import styles from './Categories.module.css'
import { Link } from 'react-router-dom'

export const Categories = () => {
  const [categories, setCategories] = useState<any[]>([])

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch(
          'https://ui-uknow-gadaf-production.up.railway.app/api/courses/categories'
        )
        const data = await response.json()
        setCategories(data.data)
      } catch (error) {
        console.log(error)
      }
    }
    getCategories()
  }, [])

  return (
    <>

      <Container>
        <h4 className={styles.sectionTitle}>Categories</h4>
        <div className='d-flex flex-wrap justify-content-center' style={{ gap: 10 }}>
          {categories.map((category, i) => (
            <div key={i}>
              <Link to={`/category?filter=${category}`}>
                <CategoryElement category={category} />
              </Link>
            </div>
          ))}
        </div>
      </Container>

    </>
  )
}
