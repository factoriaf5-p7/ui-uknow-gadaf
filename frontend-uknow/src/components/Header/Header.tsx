import LogoText from '../../assets/LogoText.svg'
import Nav from 'react-bootstrap/Nav'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <Nav defaultActiveKey='/home' as='ul' className={styles.navContainer}>
      <div>
        <Nav.Item as='li'>
          <Nav.Link href='/home'>
            <img className={styles.logoText} src={LogoText} alt='' />
          </Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
  )
}
