import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { AllCoursesCard } from './AllCoursesCard'

export const AllCourses = () => {
  const [course, setCourse] = useState<any[]>([])

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(
          'http://localhost:3000/api/courses'
        )
        const data = await response.json()
        setCourse(data.data)
      } catch (error) {
        console.log('No se encuentra ese curso por su:', error)
      }
    }
    fetchCourse()
  }, [])

  return (
    <Container>
      <h2>All courses</h2>

      <div className='d-flex justify-content-between'>
        {course.slice(0, 5).map((course) => (
          <div key={course._id}>
            <AllCoursesCard img={course.image} rating={0} title={course.name} price={course.price} />
          </div>
        ))}
      </div>
    </Container>
  )
}
