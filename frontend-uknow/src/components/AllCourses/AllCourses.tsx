import { Container } from 'react-bootstrap'
import { AllCoursesCard } from './AllCoursesCard'
import styles from './AllCourses.module.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchBar } from '../SearchBar/SearchBar'

export const AllCourses = () => {
  const [courses, setCourses] = useState<any[]>([])
  const [searchKeywords, setSearchKeywords] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://ui-uknow-gadaf-production.up.railway.app/api/courses/rating')
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const data = await response.json()
        setCourses(data.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching courses:', error)
        setError('Failed to connect to server :(')
        setLoading(false)
      }
    }
    fetchCourses()
  }, [])

  const filteredCourses = searchKeywords
    ? courses.filter((course) =>
      course.title?.toLowerCase().includes(searchKeywords.toLowerCase())
    )
    : courses

  const handleSearch = (keywords: string) => {
    setSearchKeywords(keywords)
  }

  if (loading) {
    // Display loading state
    return <div className='error-messages'>Loading...</div>
  }
  if (error) {
    // Display error message
    return <div className='error-messages'>Something went wrong: {error}</div>
  }

  return (
    <Container className={styles.container}>
      <div className={styles.topBar}>
        <h4 className={styles.sectionTitle}>All courses</h4>
      </div>
      <SearchBar onSearch={handleSearch} />

      <div className='d-flex flex-wrap justify-content-center' style={{ display: 'inline-block', gap: 10 }}>
        {filteredCourses.map((course, i) => (
          <div key={i}>
            <Link to={`/course/${course._id}`}>
              <AllCoursesCard
                image={course.image}
                rating={course.rating}
                title={course.title}
                price={course.price}
              />
            </Link>
          </div>
        ))}
      </div>
    </Container>
  )
}
