import { Container } from 'react-bootstrap'
import styles from './BoughtCourses.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { AllCoursesCard } from '../AllCourses/AllCoursesCard'

export const BoughtCourses = () => {
  const [courses, setCourses] = useState<any[]>([])
  const [courseData, setCourseData] = useState<any[]>([])

  useEffect(() => {
    async function getData () {
      try {
        const token = localStorage.getItem('token')
        const response = await axios.get('http://localhost:3000/api/users/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setCourses(response.data.bought_courses)
      } catch (error) {
        console.error(error)
      }
    }

    getData()
  }, [])

  useEffect(() => {
    async function getCoursesData () {
      const courseDataArray = []

      for (const course of courses) {
        try {
          const courseId = course.course_id
          const response = await axios.get(`http://localhost:3000/api/courses/${courseId}`)
          courseDataArray.push(response.data.data)
        } catch (error) {
          console.error(`Error fetching data for course_id: ${course.course_id}`, error)
        }
      }
      setCourseData(courseDataArray)
    }

    if (courses.length > 0) {
      getCoursesData()
    } else {
      setCourseData([])
    }
  }, [courses])

  return (
    <Container className={styles.container}>
      <h6>Bought Courses</h6>
      <div className='d-flex flex-wrap justify-content-center' style={{ display: 'inline-block', gap: 10 }}>
        {courseData.length > 0
          ? (
            <div className='d-flex flex-wrap justify-content-center' style={{ display: 'inline-block', gap: 10 }}>
              {courseData.map((course, i) => (
                <div key={i}>
                  <AllCoursesCard image={course.image} rating={course.rating} title={course.title} price={course.price} />
                </div>
              ))}
            </div>
            )
          : (
            <p>No bought courses available.</p>
            )}
      </div>
    </Container>
  )
}
