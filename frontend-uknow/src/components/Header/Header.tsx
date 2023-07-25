import { BellFill,Search } from 'react-bootstrap-icons';
import LOGO from '../../assets/LOGO.png'
import Nav from 'react-bootstrap/Nav';
import styles from './Header.module.css'

export const Header=() =>{
  return (
    <>   
      <Nav defaultActiveKey="/home" as="ul" className={styles.navContainer}>
      <Nav.Item as="li">
        <Nav.Link href="/home">
          <img src={LOGO} alt="" />
        </Nav.Link>
      </Nav.Item>
      <div className={styles.iconsContainer}>
        <Nav.Item as="li">
            <Nav.Link href="/searchbykeyword">
            <Search className={styles.icon} />
            </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
            <Nav.Link href="/notifications">
            <BellFill className={styles.icon} />
            </Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
   </>
  )
}
