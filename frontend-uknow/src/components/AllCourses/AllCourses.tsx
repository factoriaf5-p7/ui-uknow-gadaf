import Button, { Container } from 'react-bootstrap'
import { AllCoursesCard } from './AllCoursesCard'
import styles from './AllCourses.module.css'

import { useEffect, useState } from 'react'
export const AllCourses = () => {
  const [course, setCourse] = useState<any[]>([])

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/courses')
        const data = await response.json()
        setCourse(data.data)
      } catch (error) {
        console.log('No se encuentra ese curso por su:', error)
      }
    }
    fetchCourse()
  }, [])

  //   return (
  //     <Container>
  //       <h2>All courses</h2>

  //       <div className='d-flex justify-content-between'>
  //         {course.slice(0, 5).map((course) => (
  //           <div key={course._id}>
  //             <AllCoursesCard img={course.image} rating={0} title={course.name} price={course.price} />
  //           </div>
  //         ))}
  //       </div>
  //     </Container>
  //   )
  // }

  return (
    <Container>
      <div className={styles.topBar}>
        <h2>All courses</h2>

        {/* SORT BY button */}

        <div className='dropdown'>
          <button
            className='btn btn-secondary dropdown-toggle'
            type='button'
            id='dropdownMenuButton1'
            data-bs-toggle='dropdown'
            aria-expanded='false'
            style={{
              backgroundColor: '#F3F6F8',
              color: 'black',
              border: 'none'
            }}
          >
            Sort by
          </button>

          <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
            <li>
              <a className='dropdown-item' href='#'>
                Rating
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='#'>
                Price
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        {course.map((course, i) => (
          <div key={i}>
            <AllCoursesCard
              img={course.image}
              rating={course.rating}
              title={course.name}
              price={course.price}
            />
          </div>
        ))}
      </div>
    </Container>
  )
}
