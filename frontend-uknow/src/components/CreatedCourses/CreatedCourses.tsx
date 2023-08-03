import { Container } from 'react-bootstrap'
import { AllCoursesCard } from '../AllCourses/AllCoursesCard'
import styles from './CreatedCourses.module.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const CreatedCourses = () => {
  const [course, setCourse] = useState<any[]>([])
  const userId = localStorage.getItem('id')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/courses/created-courses/${userId}`)
        const data = await response.json()
        setCourse(data.data)
        setLoading(false)
      } catch (error) {
        console.log('No se encuentra ese curso por su:', error)
        setLoading(false)
      }
    }
    fetchCourse()
  }, [])

  if (loading) {
    // Display loading state
    return <div>Loading...</div>
  }

  return (
    <Container className={styles.container}>
      <h4 className={styles.sectionTitle}>Created courses</h4>
      <div className='d-flex flex-wrap justify-content-center' style={{ display: 'inline-block', gap: 10 }}>
        {course.length > 0
          ? (
            <div className='d-flex flex-wrap justify-content-center' style={{ display: 'inline-block', gap: 10 }}>
              {course.map((course, i) => (
                <div key={i}>
                  <Link to={`/course/${course._id}`}>
                    <AllCoursesCard image={course.image} rating={course.rating} title={course.title} price={course.price} />
                  </Link>
                </div>
              ))}
            </div>
            )
          : (
            <p>No created courses yet.</p>
            )}
      </div>
    </Container>
  )
}
