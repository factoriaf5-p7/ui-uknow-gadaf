import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { StarRating } from '../../components/StarRating/StarRating'
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

  const handleBuyButtonClick = async () => {
    const res = await axios.patch('http://localhost:3000/api/courses/purchase', {
      userId: localStorage.getItem('id'),
      courseId: id
    })
    return res
  }

  return (
    <Container>
      <h2>{courseDetails.name}</h2>
      <p>Category: {courseDetails.category}</p>
      <p>Difficulty: {courseDetails.difficulty}</p>
      <p>Rating: <StarRating stars={courseDetails.rating} /> {courseDetails.rating}</p>
      <p>Price: {courseDetails.price}</p>
      <p>Content: {courseDetails.content}</p>
      <img src={courseDetails.image} alt={courseDetails.name} style={{ width: '250px' }} />
      <button onClick={handleBuyButtonClick}>Buy course</button>
    </Container>

  )
}

export default CourseDetail