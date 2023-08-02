import axios from 'axios'
import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import styles from './ProfilePage.module.css'
import { Coin, ArrowBarRight } from 'react-bootstrap-icons'
import { CreatedCourses } from '../../components/CreatedCourses/CreatedCourses'
import { BoughtCourses } from '../../components/BoughtCourses/BoughtCourses'
import { ProfileActions } from '../../components/ProfileActions/ProfileActions'
import { ProfileContact } from '../../components/ProfileContact/ProfileActions'

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
        const token = localStorage.getItem('token')
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
    <Container>
      <div className={styles.intro}>
        <div><img src='https://xsgames.co/randomusers/avatar.php?g=female' className={styles.img} /></div>
        <h1 className={styles.animateCharcter}>Welcome </h1>
      </div>
      <div className={styles.user}>
        <section className={styles.userInfo}>
          <h4>{profile.name} {profile.last_name}</h4>
          <h5>{profile.email}</h5>
          <h6>Profile: {profile.profile}</h6>
          <p> id:  {profile._id}</p>
          <p className={styles.chip}><Coin />  {profile.wallet_balance}</p>
          <br />
          <button> Logout <ArrowBarRight /> </button>

        </section>
        <div className={styles.courses}>
          <section className={styles.actions}> <ProfileActions /></section>
          <section className={styles.contact}> <ProfileContact /></section>
        </div>
      </div>
      <section className={styles.createdCourses}> <CreatedCourses /></section>

    </Container>
  )
}
