import axios from 'axios'
import { useEffect, useState } from 'react'
import { CreatedCourses } from '../../components/CreatedCourses/CreatedCourses'
import { BoughtCourses } from '../../components/BoughtCourses/BoughtCourses'
import { BackButton } from '../../components/BackButton/BackButton'
import styles from './MyCourses.module.css'

export const MyCourses = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [profile, setProfile] = useState({
    _id: '',
    name: '',
    last_name: '',
    email: '',
    password: '',
    wallet_balance: 0,
    created_courses: [],
    chat_notifications_sent: [],
    chat_notifications_recieved: [],
    profile: 'user',
    bought_courses: [],
    __v: 0
  })

  useEffect(() => {
    async function getData () {
      try {
        const token = localStorage.getItem('token')
        const response = await axios.get('http://localhost:3000/api/users/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        setProfile(response.data)
        setLoading(false)
        return profile
      } catch (error) {
        console.error('Error fetching courses:', error)
        setError('Failed to connect to server :(')
        setLoading(false)
      }
    }

    getData()
  }, [])

  if (loading) {
    // Display loading state
    return <div>Loading...</div>
  }
  if (error) {
    // Display error message
    alert(error)
    return <div className='error-messages'>Something went wrong: {error}</div>
  }

  return (
    <div className={styles.pageContent}>
      <BackButton />
      <CreatedCourses />
      <BoughtCourses />
    </div>
  )
}
