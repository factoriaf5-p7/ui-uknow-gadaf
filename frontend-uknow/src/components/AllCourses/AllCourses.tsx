import { Container } from 'react-bootstrap'
import { AllCoursesCard } from './AllCoursesCard'
import styles from './AllCourses.module.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from '../Dropdown/Dropdown'
import { useSearchContext } from '../../SearchContext'
import { SearchBar } from '../SearchBar'

export const AllCourses = () => {
  const [courses, setCourses] = useState<any[]>([])
  const [searchKeywords, setSearchKeywords] = useState('')

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/courses')
        const data = await response.json()
        setCourses(data.data)
      } catch (error) {
        console.log('Error fetching courses:', error)
      }
    }
    fetchCourses()
  }, [])

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchKeywords.toLowerCase())
  )

  const handleSearch = (keywords: string) => {
    setSearchKeywords(keywords)
  }

  return (
    <Container className={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <div className={styles.topBar}>
        <h4 className={styles.sectionTitle}>All courses</h4>

        {/* <div className='dropdown'> */}
        <Dropdown />
      </div>

      <div className='d-flex flex-wrap justify-content-center' style={{ display: 'inline-block', gap: 10 }}>
        {filteredCourses.map((course, i) => (
          <div key={i}>
            <Link to={`/course/${course._id}`}>
              <AllCoursesCard
                image={course.image}
                rating={course.rating}
                title={course.name}
                price={course.price}
              />
            </Link>
          </div>
        ))}
      </div>
    </Container>
  )
}
