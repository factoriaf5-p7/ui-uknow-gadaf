import { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import styles from './NavbarDesk.module.css'
import LOGO from '../../assets/LOGO.png'
import { Container } from 'react-bootstrap'

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
    <Container>
      <Nav defaultActiveKey='/home' as='ul' className={`${styles.navContainer} ${visible ? styles.visible : styles.hidden} justify-content-between my-2`}>
        <div>
          <Nav.Item as='li'>
            <Nav.Link className='p-0' href='/home'>
              <img src={LOGO} alt='' />
            </Nav.Link>
          </Nav.Item>
        </div>
        <div className='d-flex'>
          <Nav.Item as='li'>
            <Nav.Link className={styles.item} href='/home'>
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link className={styles.item} href='/addcourse'>
              Add a Course
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link className={styles.item} href='/course'>
              Courses
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link className={styles.item} href='/loginsignup'>
              Profile
            </Nav.Link>
          </Nav.Item>
        </div>
      </Nav>
    </Container>
  )
}
