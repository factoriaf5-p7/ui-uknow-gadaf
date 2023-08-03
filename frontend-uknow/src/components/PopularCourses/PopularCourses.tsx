import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from './PopularCourses.module.css'
import { AllCoursesCard } from '../AllCourses/AllCoursesCard'

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

      <div className={styles.coursesContainer}>
        {course.slice(0, 5).map((course) => (
          <div key={course._id}>
            <Link to={`/course/${course._id}`}>
              <AllCoursesCard image={course.image} rating={course.rating} title={course.title} price={course.price} />
            </Link>
          </div>
        ))}
      </div>
    </Container>
  )
}
