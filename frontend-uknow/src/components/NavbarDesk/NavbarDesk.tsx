import { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import styles from './NavbarDesk.module.css'
import LogoImg from '../../assets/LogoGris.png'
import LogoText from '../../assets/LogoText.svg'
import { BellFill, Heart, Person, PlusCircle, Search } from 'react-bootstrap-icons'

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
              <Nav.Link href='/course'>
                <span className={styles.item}>
                  My courses 
                  
                  {/* <Heart className={styles.icon} /> */}
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as='li'>
              <Nav.Link href='/auth'>
                <span className={styles.item}>
                  Profile 
                  
                  {/* <Person className={styles.icon} /> */}
                </span>
              </Nav.Link>
            </Nav.Item>
          </div>
          <div className={styles.iconsContainer}>
            <Nav.Item as='li'>
              <Nav.Link href='/searchbykeyword'>
                <Search className={styles.iconBubble} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as='li'>
              <Nav.Link href='/notifications'>
                <BellFill className={styles.iconBubble} />
              </Nav.Link>
            </Nav.Item>
          </div>
        </div>
      </div>
    </section>
  )
}
