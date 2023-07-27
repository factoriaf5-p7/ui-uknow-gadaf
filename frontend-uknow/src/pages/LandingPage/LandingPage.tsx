import { Link } from 'react-router-dom'
import { ButtonP } from '../../components/ButtonP'
import { ButtonS } from '../../components/ButtonS'
import styles from './LandingPage.module.css'
import Logo from '../../assets/LOGO.png'

export const LandingPage = () => {
  return (
    <div className={`${styles.container} d-flex flex-column justify-content-center align-items-center`} style={{ gap: 100 }}>
      <div>
        <img src={Logo} alt='logo' style={{ width: '150px', height: '150px' }} />
      </div>
      <div className='border border-dark p-2'>
        <p>Sign up and get 1000 knowlitos to get you started</p>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <Link to='/auth'>
            <ButtonP className={styles.button} text='Get Started' />
          </Link>
          <Link to='/home'>
            <ButtonS className={styles.button} text='Explore' />
          </Link>
        </div>
      </div>
    </div>
  )
}
