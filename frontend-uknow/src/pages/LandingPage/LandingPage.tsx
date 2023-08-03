import { Link } from 'react-router-dom'
import { ButtonP } from '../../components/ButtonP'
import { ButtonS } from '../../components/ButtonS'
import styles from './LandingPage.module.css'
import Logo from '../../assets/LogoGris.png'

export const LandingPage = () => {
  return (
    <>
      {/* <div className={styles.interrogantes}>
        <div className={styles.i1}>?</div><div className={styles.i2}>?</div><div className={styles.i3}>?</div>
      </div> */}
      <div className={styles.containerLandingPage}>
        <div className={styles.contentLandingPage}>
          <section className={styles.landingPagelogo}>
            <img src={Logo} alt='logo' className={styles.logoImg} />
            <h1 className={styles.textLogoAnimation}>
              <span className={styles.u}>u</span>
              <span className={styles.guion}>-</span>
              <span className={styles.k}>k</span><span className={styles.n}>n</span><span className={styles.o}>o</span><span className={styles.w}>w</span>
            </h1>
          </section>

          <section className={styles.landingPageText}>
            <h1 className={styles.slogan}>The new sharing </h1>
            <h1 className={styles.slogan}>& learning platform </h1>
            <h2 className={styles.catchPhrase}>Sign up and get 1000 free knowlitos to get you started</h2>
          </section>
          <div className={styles.landingPageButtons}>
            <Link to='/auth'>
              <ButtonP className={styles.getStartedButton} text='Get started' />
            </Link>
            <br /><br />
            <Link to='/home'>
              <ButtonS className={styles.exploreButton} text='Explore' />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
