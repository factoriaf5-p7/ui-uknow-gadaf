import LogoText from '../../assets/LogoText.svg'
import Nav from 'react-bootstrap/Nav'
import styles from './Header.module.css'
import React from 'react'

interface HeaderProps {
  onSearch: (keywords: string) => void;
}

export const Header: React.FC<HeaderProps> = () => {
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
