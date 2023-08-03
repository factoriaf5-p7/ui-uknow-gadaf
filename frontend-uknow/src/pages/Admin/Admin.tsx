import { useEffect, useState } from 'react'
import styles from './Admin.module.css'
import { Link } from 'react-router-dom'
import { AllCoursesCard } from '../../components/AllCourses/AllCoursesCard'
import axios from 'axios'

export const Admin = () => {
  const [activeTab, setActiveTab] = useState('courses')
  const [courses, setCourses] = useState<any[]>([])
  const [users, setUsers] = useState<any[]>([])
  const [message, setMessage] = useState(Array(users.length).fill(''))

  const handleTabClick = (tab: any) => {
    setActiveTab(tab)
  }

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://ui-uknow-gadaf-production.up.railway.app/api/courses/rating')
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const data = await response.json()
        setCourses(data.data)
      } catch (error) {
        console.error('Error fetching courses:', error)
      }
    }
    fetchCourses()
  }, [])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://ui-uknow-gadaf-production.up.railway.app/api/users/')
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const data = await response.json()
        setUsers(data.users)
      } catch (error) {
        console.error('Error fetching courses:', error)
      }
    }
    fetchUsers()
  }, [])

  const deleteCourse = async (courseId: any, index: number) => {
    const res = await axios.delete(`https://ui-uknow-gadaf-production.up.railway.app/api/courses/admin/delete?id=${courseId}`)
    console.log(res.data.data)
    const updatedMessages = [...message]
    updatedMessages[index] = res.data.data
    setMessage(updatedMessages)
  }

  const CoursesTab = () => {
    return (
      <div className='d-flex flex-wrap justify-content-center mb-4' style={{ display: 'inline-block', gap: 10 }}>
        {courses.map((course, i) => (
          <div key={i}>
            <div className='d-flex flex-column justify-content-center align-items-center border border-dark p-2'>
              <button className='m-1' onClick={() => deleteCourse(course._id, i)}>X</button>
              <Link to={`/course/${course._id}`}>
                <AllCoursesCard
                  image={course.image}
                  rating={course.rating}
                  title={course.title}
                  price={course.price}
                />
                <p>{course._id}</p>
              </Link>
              <p style={{ color: 'red' }}>{message[i]}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }

  const deleteUser = async (userId: any, index: number) => {
    const res = await axios.delete(`https://ui-uknow-gadaf-production.up.railway.app/api/users/admin/delete?id=${userId}`)
    const updatedMessages = [...message]
    updatedMessages[index] = res.data.data
    setMessage(updatedMessages)
  }

  const UsersTab = () => {
    return (
      <div className='d-flex flex-wrap justify-content-center' style={{ display: 'inline-block', gap: 10 }}>
        {users.map((user, i) => (
          <div key={i} className='user-item-container'>
            <div className='d-flex flex-column justify-content-center align-items-center border border-dark text-center p-2'>
              <button className='m-1' onClick={() => deleteUser(user._id, i)}>X</button>
              <div>
                <p>{user.name}</p>
                <p>{user.last_name}</p>
                <p>{user.email}</p>
                <p>{user.wallet_balance}</p>
                <p>{user._id}</p>
              </div>
              <p style={{ color: 'red' }}>{message[i]}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className='p-4'>
        <button onClick={() => handleTabClick('courses')}>Courses</button>
        <button onClick={() => handleTabClick('users')}>Users</button>
      </div>
      <div>
        {activeTab === 'courses' && <CoursesTab />}
        {activeTab === 'users' && <UsersTab />}
      </div>
    </div>
  )
}
