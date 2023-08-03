import axios from 'axios'
import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import styles from './ProfilePage.module.css'
import { Coin, ArrowBarRight, PencilFill, BellFill, ShieldFillCheck, ChatDotsFill, InfoSquareFill } from 'react-bootstrap-icons'
import { ProfileActions } from '../../components/ProfileActions/ProfileActions'
import { ProfileContact } from '../../components/ProfileContact/ProfileContact'
import { ButtonP } from '../../components/ButtonP'
import { BackButton } from '../../components/BackButton/BackButton'

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
      <BackButton />
      <div className={styles.intro}>
        <h1 className={styles.animateCharacter}>Welcome </h1>
      </div>
      <div className={styles.user}>
        <section className={styles.userInfo}>
          <div className={styles.imgSection}><img src='https://xsgames.co/randomusers/avatar.php?g=female' className={styles.img} /></div>
          <h3 className={styles.profileTitles}>Personal Information <PencilFill className={styles.profileIcons} /></h3>
          <h4 className={styles.profileTitlesSmall}>{profile.name} {profile.last_name}</h4>
          <h6 className={styles.profileEmail}>{profile.email}</h6>
          <br /><br />
          <h3 className={styles.profileTitles}>My wallet</h3>
          <p className={styles.chip}>  {profile.wallet_balance} <Coin /></p>
          <br />
          <h3 className={styles.profileTitles}>My courses</h3>
          <section className={styles.actions}> <ProfileActions /></section>
          <br />
          <h3 className={styles.profileTitles}>Settings</h3>
          <h6 className={styles.profileSettings}><BellFill /> Notifications</h6>
          <h6 className={styles.profileSettings}><ChatDotsFill />Help and Support</h6>
          <h6 className={styles.profileSettings}><InfoSquareFill />Terms of Service</h6>
          <h6 className={styles.profileSettings}><ShieldFillCheck />Privacy Policy</h6>
          <ButtonP className={styles.logOutBtn} onClick={handleLogOut} text='Logout' icon={<ArrowBarRight />} />
        </section>
        <div className={styles.courses}>
          <section className={styles.contact}> <ProfileContact /></section>
        </div>
      </div>
    </Container>
  )
}
