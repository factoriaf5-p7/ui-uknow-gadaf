import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { CourseCard } from './CourseCard'
import { Link } from 'react-router-dom'
import styles from './PopularCourses.module.css'

export const PopularCourses = () => {
  const [course, setCourse] = useState<any[]>([])

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(
          'http://localhost:3000/api/courses/rating'
        )
        const data = await response.json()
        setCourse(data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCourse()
  }, [])

  return (
    <Container className={styles.container}>
      <h4 className={styles.sectionTitle}>Most popular</h4>

      <div className='d-flex justify-content-center flex-wrap'>
        {course.slice(0, 5).map((course) => (
          <div key={course._id}>
            <Link to={`/course/${course._id}`}>
              <CourseCard img={course.image} rating={course.rating} title={course.name} price={course.price} />
            </Link>
          </div>
        ))}
      </div>
    </Container>
  )
}
