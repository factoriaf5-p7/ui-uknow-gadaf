import { Container } from 'react-bootstrap'
import { AllCoursesCard } from '../AllCourses/AllCoursesCard'
import styles from './CreatedCourses.module.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const CreatedCourses = () => {
  const [course, setCourse] = useState<any[]>([])
  const userId = localStorage.getItem('id')
  console.log(`Este es el user ${userId}`)
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/courses/created-courses/${userId}`)
        const data = await response.json()
        setCourse(data.data)
      } catch (error) {
        console.log('No se encuentra ese curso por su:', error)
      }
    }
    fetchCourse()
  }, [])

  return (
    <Container className={styles.container}>
      <h6>Created Courses</h6>
      <div className='d-flex flex-wrap justify-content-center' style={{ display: 'inline-block', gap: 10 }}>
        {course.map((course, i) => (
          <div key={i}>
            <Link to={`/course/${course._id}`}>
              <AllCoursesCard
                image={course.image}
                rating={course.rating}
                title={course.name}
                price={course.price}
              />
            </Link>
          </div>
        ))}
      </div>
    </Container>
  )
}
