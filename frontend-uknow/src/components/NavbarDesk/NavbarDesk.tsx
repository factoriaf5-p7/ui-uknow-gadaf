import { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import styles from './NavbarDesk.module.css'
import LogoImg from '../../assets/LogoGris.png'
import LogoText from '../../assets/LogoText.svg'
import { NavDropdown } from 'react-bootstrap'

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

  const handleLogOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('id')
  }

  return (
    <section className={styles.navBarSection}>
      <div className={styles.navBarContainer}>
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

        <div className={styles.navBarItems}>
          <div className={styles.navBarLinks}>
            <Nav.Item as='li'>
              <Nav.Link href='/addcourse'>
                <span className={styles.item}>
                  New Course

                  {/* <PlusCircle className={styles.icon} /> */}

                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as='li'>
              <Nav.Link href='/mycourses'>
                <span className={styles.item}>
                  My courses

                  {/* <Heart className={styles.icon} /> */}
                </span>
              </Nav.Link>
            </Nav.Item>
              <NavDropdown title='Profile' className={styles.item}>
                <NavDropdown.Item href='/profile' className={styles.dropDownItem}>
                  My profile
                </NavDropdown.Item>
                <NavDropdown.Item href='/auth' className={styles.dropDownItem}>
                  Sign up
                </NavDropdown.Item>
                <NavDropdown.Item href='/auth' className={styles.dropDownItem}>
                  Log in
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='/auth' onClick={handleLogOut} className={styles.dropDownItem}>
                  Log out
                </NavDropdown.Item>
              </NavDropdown>
          </div>
        </div>
      </div>
    </section>
  )
}
