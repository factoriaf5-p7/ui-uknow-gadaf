import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NavbarDesk } from '../NavbarDesk/NavbarDesk'

const CourseDetail = () => {
  const { id } = useParams()
  // Now, 'id' contains the value of the _id from the URL

  const [courseDetails, setCourseDetails] = useState<any>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/courses/${id}`)
        const data = await response.json()
        setCourseDetails(data.data)
        setLoading(false)
      } catch (error) {
        console.log('Error fetching course details:', error)
        setLoading(false)
      }
    }

    fetchCourseDetails()
  }, [id])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!courseDetails) {
    return <div>Course not found.</div>
  }

  return (
    <>
      <NavbarDesk />
      <div>
        <h1>{courseDetails.name}</h1>
        <p>Rating: {courseDetails.rating}</p>
        <p>Price: {courseDetails.price}</p>
        <img src={courseDetails.image} alt={courseDetails.name} />
      </div>
    </>
  )
}

export default CourseDetail
