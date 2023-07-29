import axios from 'axios'
import { useEffect, useState } from 'react'

export const Profile = () => {
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
        const token = sessionStorage.getItem('token')
        console.log(token)
        const response = await axios.get('http://localhost:3000/api/users/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        console.log(response.data)
        setProfile(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    getData()
  }, [])

  return (
    <div>
      <h4>Hey, this is coming from backend to get user profile</h4>
      <p>{profile.name}</p>
      <p>{profile._id}</p>
    </div>
  )
}
