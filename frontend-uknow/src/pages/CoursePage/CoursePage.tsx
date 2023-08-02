import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { StarRating } from '../../components/StarRating/StarRating'
import DemoImg from '../../assets/demoImg.jpeg'
import styles from './CoursePage.module.css'
import { PlayFill, Clock, BarChartFill, Lock } from 'react-bootstrap-icons'
import axios from 'axios'
import { BackButton } from '../../components/BackButton/BackButton'

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

  const [message, setMessage] = useState<React.ReactNode>('')
  const navigate = useNavigate()
  const handleBuyCourse = async () => {
    const isConfirmed = window.confirm('Are you sure you want to buy this course?')
    if (isConfirmed) {
      try {
        const res = await axios.patch('http://localhost:3000/api/courses/purchase', {
          userId: localStorage.getItem('id'),
          courseId: id
        })
        // Estilos Message
        setMessage(<h4 className='text-success'>Course purchased!</h4>)
        return res
      } catch (error: any) {
        if (error.response.status === 400) {
          navigate('/auth')
        } else {
          setMessage(<h4 className='text-danger'>{error.response.data.message}</h4>)
        }
      }
    }
  }

  return (
    <>
     
      <div className={styles.courseContainer}>
      <BackButton />
        <section className={styles.courseHeader}>
          
        <h2>{courseDetails.title}</h2>
        <hr />
          <img src={DemoImg} alt={courseDetails.title} className={styles.courseImg} />
          <hr />
          
          <div className={styles.courseSpecs}>
            <div className={styles.rating}>
              <StarRating stars={courseDetails.rating} /> {courseDetails.rating}
            </div>
            <div className={styles.difficulty}>
              <BarChartFill />
              {courseDetails.difficulty}
            </div>
            <div className={styles.courseCategory}>{courseDetails.category}</div>
          </div>
          <p className={styles.courseDescription}>{courseDetails.description}</p>
          {message}
          {/* Conditionally display the buy button or success message */}
          {courseDetails.purchased
            ? (
              <div className={styles.buyButton}>
                <p className={styles.priceCourse}>Course purchased!</p>
              </div>
              )
            : (
              <div className={styles.buyButton} onClick={handleBuyCourse}>
                <p className={styles.priceCourse}>Buy for {courseDetails.price}$</p>
              </div>
              )}
          <hr />
          
        </section>

        <section className={styles.courseContent}>

          <h4 className={styles.courseContentTitle}>Course's content</h4>
          <p>{courseDetails.content}</p>

          {/* Show video link only if the course is purchased */}
          {courseDetails.purchased ? (
            <a href={courseDetails.videoUrl} className={styles.videoLink}>
              <div className={styles.videoBox}>
                <div className={styles.squareButton}>
                  <button className={styles.circleButton}>
                    <PlayFill className={styles.playIcon} />
                  </button>
                </div>
                <div className={styles.videoInfo}>
                  <h3 className={styles.videoTitle}>{courseDetails.videoTitle}What is Scala for Spark?</h3>
                  <p className={styles.videoDuration}>
                    <Clock className={styles.clockIcon} /> {courseDetails.videoDuration} 20 Minutes
                  </p>
                </div>
              </div>
            </a>
          ) : (
          /* If the course is NOT purchased, show only the video title */
            <div className={styles.videoTitleUnbought}>
              <Lock />
              {courseDetails.videoTitle}What is Scala for Spark?
            </div>
          )}
        </section>
      </div>
    </>
  )
}

export default CourseDetail
