import { Link } from 'react-router-dom'
import { ButtonP } from '../../components/ButtonP'
import { ButtonS } from '../../components/ButtonS'
import styles from './LandingPage.module.css'
import Logo from '../../assets/LogoGris.png'

export const LandingPage = () => {
  return (
    <>
      <div className={`${styles.container} d-flex flex-column justify-content-center align-items-center`} style={{ gap: 100 }}>
        {/* <div className={styles.interrogantes}>
          <div className={styles.i1}>?</div><div className={styles.i2}>?</div><div className={styles.i3}>?</div>
        </div> */}
        <div className={styles.logo}>
          <img src={Logo} alt='logo' className={styles.logoImg} />
          <h1 className={styles.textLogoAnimation}>
            <span className={styles.u}>u</span>
            <span className={styles.guion}>-</span>
            <span className={styles.k}>k</span><span className={styles.n}>n</span><span className={styles.o}>o</span><span className={styles.w}>w</span>
          </h1>
        </div>
        {/* <h3 className={styles.titleAnim}>
        <span>With U-know</span>
        <div className={styles.message}>
          <div className={styles.word1}>Signup</div>
          <div className={styles.word2}>Win 1000</div>
          <div className={styles.word3}>Learn</div>
        </div>
      </h3> */}
        <div className='border border-dark p-2'>
          <p>Sign up and get 1000 knowlitos to get you started</p>
          <div className='d-flex flex-column justify-content-top align-items-center'>
            <Link to='/auth'>
              <ButtonP className={styles.button} text='Get Started' />
            </Link>
            <Link to='/home'>
              <ButtonS className={styles.button} text='Explore' />
            </Link>
          </div>
        </div>
      </div>

    </>
  )
}
