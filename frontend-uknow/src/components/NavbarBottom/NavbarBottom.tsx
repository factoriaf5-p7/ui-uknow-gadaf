import Nav from 'react-bootstrap/Nav'
import { HouseDoorFill, PersonCircle, BookHalf, FilePlusFill } from 'react-bootstrap-icons'
import styles from './NavbarBottom.module.css'

export const NavbarBottom = () => {
  return (
    <>
      <Nav defaultActiveKey='/home' as='ul' className={styles.navContainer}>
        <Nav.Item as='li'>
          <Nav.Link href='/home'>
            <HouseDoorFill className={styles.icon} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as='li'>
          <Nav.Link href='/addcourse'>
            <FilePlusFill className={styles.icon} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as='li'>
          <Nav.Link href='/course'>
            <BookHalf className={styles.icon} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as='li'>
          <Nav.Link href='/auth'>
            <PersonCircle className={styles.icon} />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}
