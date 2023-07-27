import styles from './Footer.module.css'
import LOGO from '../../assets/LogoNegativo.png'

export const Footer = () => {
  return (
    <section className={styles.footerSection}>
      <section className={styles.topFooter}>
        <div className={styles.logoCopyright}>
          <a href='/home'>
            <img
              className={styles.logoFooter}
              src={LOGO}
              alt='U-KNOW'
              loading='eager'
              width='91.07142857142857'
              height='34'
            />
          </a>
        </div>

        <div className={styles.footerLinks}>
          <div>
            <li className={styles.footerLink}>
              <a href='#'>About us</a>
            </li>
            <li className={styles.footerLink}>
              <a href='#'>Contact us</a>
            </li>
            <li className={styles.footerLink}>
              <a href='#'>Help and Support</a>
            </li>
          </div>
          <div>
            <li className={styles.footerLink}>
              <a href='#'>Terms</a>
            </li>
            <li className={styles.footerLink}>
              <a href='#'>Privary policy</a>
            </li>
            <li className={styles.footerLink}>
              <a href='#'>Cookie settings</a>
            </li>
          </div>
        </div>
      </section>
      <div className={styles.bottomFooter}>
        <div className={styles.socialFooter}>
          iconos redes
        </div>
        <div className={styles.copyrightFooter}>
          U-KNOW, Inc. © 2023
        </div>
      </div>
    </section>
  )
}
