import axios from 'axios'
import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import styles from './ProfilePage.module.css'
import { Coin, ArrowBarRight } from 'react-bootstrap-icons'
import { ProfileActions } from '../../components/ProfileActions/ProfileActions'
import { ProfileContact } from '../../components/ProfileContact/ProfileContact'

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
  const handleLogOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    window.location.href = '/'
  }
  return (
    <Container>
      <div className={styles.intro}>
        <div><img src='https://xsgames.co/randomusers/avatar.php?g=female' className={styles.img} /></div>
        <h1 className={styles.animateCharcter}>Welcome </h1>
      </div>
      <div className={styles.user}>
        <section className={styles.userInfo}>
          <h4>{profile.name} {profile.last_name}</h4>
          <h6>{profile.email}</h6>
          <br />
          <p className={styles.chip}><Coin />  {profile.wallet_balance}</p>
          <br />
          <button className={styles.logoutBtn} onClick={handleLogOut}> Logout <ArrowBarRight /> </button>

        </section>
        <div className={styles.courses}>
          <section className={styles.actions}> <ProfileActions /></section>
          <section className={styles.contact}> <ProfileContact /></section>
        </div>
      </div>
    </Container>
  )
}
