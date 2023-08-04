import { Container } from 'react-bootstrap'
import styles from './BoughtCourses.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { AllCoursesCard } from '../AllCourses/AllCoursesCard'
import { Link } from 'react-router-dom'

export const BoughtCourses = () => {
  const [courses, setCourses] = useState<any[]>([])
  const [courseData, setCourseData] = useState<any[]>([])

  useEffect(() => {
    async function getData () {
      try {
        const token = localStorage.getItem('token')
        const response = await axios.get('https://ui-uknow-gadaf-production.up.railway.app/api/users/profile', {
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
        if (course && course.course_id) {
          try {
            const courseId = course.course_id
            const response = await axios.get(`https://ui-uknow-gadaf-production.up.railway.app/api/courses/${courseId}`)
            if (response.data.data) {
              courseDataArray.push(response.data.data)
            } else {
              console.error(`Course data is null for course_id: ${courseId}`)
            }
          } catch (error) {
            console.error(`Error fetching data for course_id: ${course.course_id}`, error)
          }
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
      <h4 className={styles.sectionTitle}>Bought courses</h4>
      <div className='d-flex flex-wrap justify-content-center' style={{ display: 'inline-block', gap: 10 }}>
        {courseData.length > 0
          ? (
            <div className='d-flex flex-wrap justify-content-center' style={{ display: 'inline-block', gap: 10 }}>
              {courseData.map((course, i) => (
                <div key={i}>
                  <Link to={`/course/${course._id}`}>
                    <AllCoursesCard image={course.image} rating={course.rating} title={course.title} price={course.price} />
                  </Link>
                </div>
              ))}
            </div>
            )
          : (
            <p>No bought courses yet.</p>
            )}
      </div>
    </Container>
  )
}
