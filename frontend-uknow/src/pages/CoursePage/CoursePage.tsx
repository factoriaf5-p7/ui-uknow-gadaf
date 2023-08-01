import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { StarRating } from '../../components/StarRating/StarRating'
import DemoImg from '../../assets/demoImg.jpeg'
import styles from './CoursePage.module.css'
import { PlayFill, Clock, BarChartFill } from 'react-bootstrap-icons'

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

  const handleBuyCourse = () => {
    const isConfirmed = window.confirm('Are you sure you want to buy this course?')
    if (isConfirmed) {
      // API call.
    }
  }

  return (
    <>
      <Container className={styles.courseContainer}>
        <section>
          <img src={DemoImg} alt={courseDetails.name} className={styles.courseImg} />
          <hr />
          <h2>{courseDetails.name}</h2>
          <div className={styles.ratingDifficulty}>
            <div className={styles.rating}>
              <StarRating stars={courseDetails.rating} /> {courseDetails.rating}
            </div>
            <div className={styles.difficulty}>
              <BarChartFill />
              {courseDetails.difficulty}
            </div>

          </div>
          <div className={styles.buyButton} onClick={handleBuyCourse}>
            <p className={styles.priceCourse}>Buy for {courseDetails.price}$</p>
          </div>
          <hr />

          <p className={styles.courseDescription}>{courseDetails.courseDescription}</p>
          <p>{courseDetails.category}</p>
        </section>

        <section className={styles.courseContent}>
          <h4 className={styles.courseContentTitle}>Course's content</h4>
          <p>{courseDetails.content}</p>

          <a href={courseDetails.videoUrl} className={styles.videoLink}>
            <div className={styles.videoBox}>
              <div className={styles.squareButton}>
                <button className={styles.circleButton}>
                  <PlayFill className={styles.playIcon} />
                </button>
              </div>
              <div className={styles.videoInfo}>
                <h3 className={styles.videoTitle}>What is Scala for Spark?</h3>
                <p className={styles.videoDuration}>
                  <Clock className={styles.clockIcon} /> {courseDetails.videoDuration} 20 Minutes
                </p>
              </div>
            </div>
          </a>

        </section>
      </Container>
    </>
  )
}

export default CourseDetail
