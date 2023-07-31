import { Container } from 'react-bootstrap'
import { AllCoursesCard } from '../AllCourses/AllCoursesCard'
import styles from './CreatedCourses.module.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const CreatedCourses = ({idUser}) => {
  const [course, setCourse] = useState<any[]>([])

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/users/created-courses',
          {
            headers: {
              Authorization: ` Bearer ${token} `
            }
          })

        const data = await [response]
        setCourse(data)
      } catch (error) {
        console.log('No lista los cursos creados por un usuario ...', error)
      }
    }
    fetchCourses()
  }, [])

  return (
    <Container className={styles.container}>
      <h3>Created Courses</h3>
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
