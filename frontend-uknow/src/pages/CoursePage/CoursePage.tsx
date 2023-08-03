/* eslint-disable multiline-ternary */
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { StarRating } from '../../components/StarRating/StarRating'
import styles from './CoursePage.module.css'
import { PlayFill, Clock, BarChartFill, Lock } from 'react-bootstrap-icons'
import axios from 'axios'
import { BackButton } from '../../components/BackButton/BackButton'

const CourseDetail = () => {
  const { id } = useParams()
  const [courseDetails, setCourseDetails] = useState<any>([])
  const [coursePurchased, setCoursePurchased] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getProfileData () {
      try {
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('id')
        const response = await axios.get(`http://localhost:3000/api/users/verify/${userId}/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setCoursePurchased(response.data)
        setLoading(false)
      } catch (error) {
        console.error(error)
        setLoading(false)
      }
    }
    console.log(id)
    getProfileData()
  }, [])

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/courses/${id}`)
        const data = await response.json()
        setCourseDetails(data.data)
        console.log(data.data)
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
        window.location.reload()
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

  if (loading) {
    // Display loading state
    return <div>Loading...</div>
  }

  return (
    <>
      <BackButton />
      <div className={styles.courseContainer}>

        <section className={styles.courseHeader}>

          <hr />
          <div className={styles.imgSpecs}>
            <img src={courseDetails.image} alt={courseDetails.title} className={styles.courseImg} />
            <hr />
            <div className={styles.specsDescriptionBuy}>
              <h2 className={styles.courseTitle}>{courseDetails.title}</h2>
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
              {coursePurchased
                ? (
                  <></>
                  )
                : (
                  <div className={styles.buyButton} onClick={handleBuyCourse}>
                    <p className={styles.priceCourse}>Buy for {courseDetails.price}$</p>
                  </div>
                  )}
            </div>
          </div>
          <hr />

        </section>

        <section className={styles.courseContent}>
          <div className={styles.courseContentTop}>
            <h4 className={styles.courseContentTitle}>Course's content</h4>
            <p>{courseDetails.content}</p>

            {/* Show video link only if the course is purchased */}
            {coursePurchased ? (
              <a href={courseDetails.videoUrl} className={styles.videoLink}>
                <div className={styles.videoBox}>
                  <div className={styles.squareButton}>
                    <button className={styles.circleButton}>
                      <PlayFill className={styles.playIcon} />
                    </button>
                  </div>
                  <div className={styles.videoInfo}>
                    <h3 className={styles.videoTitle}>{courseDetails.videoTitle}</h3>
                    <p className={styles.videoDuration}>
                      <Clock className={styles.clockIcon} /> {courseDetails.videoDuration}
                    </p>
                  </div>
                </div>
              </a>
            ) : (
            /* If the course is NOT purchased, show only the video title */
              <div className={styles.videoTitleUnbought}>
                <Lock />
                {courseDetails.videoTitle}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  )
}

export default CourseDetail
