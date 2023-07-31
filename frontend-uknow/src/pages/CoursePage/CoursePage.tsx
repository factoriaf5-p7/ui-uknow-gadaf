import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { StarRating } from '../../components/StarRating/StarRating'
import DemoImg from '../../assets/demoImg.jpeg'
import styles from './CoursePage.module.css'
import axios from 'axios'

const CourseDetail = () => {
  const { id } = useParams()

  const [courseDetails, setCourseDetails] = useState<any>([])

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/courses/${id}`)
        const data = await response.json()
        setCourseDetails(data.data)
      } catch (error) {
        console.log('Error fetching course details:', error)
      }
    }

    fetchCourseDetails()
  }, [id])

  if (!courseDetails) {
    return <div>Course not found.</div>
  }

  const handleBuyCourse = async () => {
    const isConfirmed = window.confirm('Are you sure you want to buy this course?')
    if (isConfirmed) {
      const res = await axios.patch('http://localhost:3000/api/courses/purchase', {
        userId: localStorage.getItem('id'),
        courseId: id
      })
      return res
    }
  }

  return (
    <>
      <Container className={styles.courseContainer}>
        <section>
          <img src={DemoImg} alt={courseDetails.name} className={styles.courseImg} />
          <hr />
          <div className={styles.ratingLevel}>
            <StarRating stars={courseDetails.rating} /> {courseDetails.rating}
            <p>{courseDetails.difficulty}</p>
          </div>
          <h2>{courseDetails.name}</h2>

          <div className={styles.priceButton}>
            <p className={styles.priceCourse}>{courseDetails.price}$</p>
            <div className={styles.buyButton} onClick={handleBuyCourse}>
              Buy course
            </div>
          </div>
          <hr />

          <p className={styles.courseDescription}>{courseDetails.courseDescription}</p>
          <p>{courseDetails.category}</p>
        </section>
        <section className={styles.courseContent}>
          <h4 className={styles.courseContentTitle}>Course's content</h4>
          <p>{courseDetails.content}</p>
        </section>
      </Container>
    </>
  )
}

export default CourseDetail
