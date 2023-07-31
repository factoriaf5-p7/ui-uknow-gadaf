import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { StarRating } from '../StarRating/StarRating'

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

  return (
    <>
      <Container>
        <h2>{courseDetails.name}</h2>
        <p>Category: {courseDetails.category}</p>
        <p>Difficulty: {courseDetails.difficulty}</p>
        <p>Rating: <StarRating stars={courseDetails.rating}/> {courseDetails.rating}</p>
        <p>Price: {courseDetails.price}</p>
        <p>Description: {courseDetails.content}</p>
        <img src={courseDetails.image} alt={courseDetails.name} style={{ width: '250px' }} />
      </Container>
    </>
  )
}

export default CourseDetail
