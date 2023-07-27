// NavbarDesk.tsx
import { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import styles from './NavbarDesk.module.css'
import LogoImg from '../../assets/LogoGris.png'
import LogoText from '../../assets/LogoText.svg'

export const NavbarDesk = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos <= 0)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos])

  return (
    <section className={styles.navBarSection}>
      <div className={styles.navBarItems}>
        <div>
          <Nav.Item className={styles.logoText}>
            <Nav.Link href='/home'>
              <img src={LogoText} alt='' className={visible ? styles.growLogoText : ''} />
            </Nav.Link>
          </Nav.Item>
        </div>
        <div>
          <Nav.Item className={`${styles.logoImg} ${!visible ? styles.logoImgHidden : ''}`}>
            <Nav.Link href='/home'>
              <img src={LogoImg} alt='' />
            </Nav.Link>
          </Nav.Item>
        </div>
        <div className={styles.navBarLinks}>
          <Nav.Item as='li'>
            <Nav.Link className={styles.item} href='/addcourse'>
              New Course
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link className={styles.item} href='/course'>
              My courses
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link className={styles.item} href='/loginsignup'>
              Profile
            </Nav.Link>
          </Nav.Item>
        </div>
      </div>
    </section>
  )
}
