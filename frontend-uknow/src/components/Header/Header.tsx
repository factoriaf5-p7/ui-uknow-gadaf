// import { Search } from 'react-bootstrap-icons'
import LogoText from '../../assets/LogoText.svg'
import Nav from 'react-bootstrap/Nav'
import styles from './Header.module.css'
// import Form from 'react-bootstrap/Form'
// import { InputGroup } from 'react-bootstrap'
// import { ChangeEvent } from 'react'
// import { useSearchContext } from '../../SearchContext'
import { SearchBar } from '../SearchBar'

export const Header = () => {
  // const { searchKeywords, setSearchKeywords } = useSearchContext()

  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const lowerCase = event.target.value.toLowerCase()
  //   setSearchKeywords(lowerCase)
  //   console.log(searchKeywords)
  // }
  // const handleSearch = () => {
  //   console.log('Search triggered:', searchKeywords)
  // }

  return (
    <Nav defaultActiveKey='/home' as='ul' className={styles.navContainer}>
      <div>
        <Nav.Item as='li'>
          <Nav.Link href='/home'>
            <img className={styles.logoText} src={LogoText} alt='' />
          </Nav.Link>
        </Nav.Item>
      </div>
      <div className={styles.iconsContainer}>
        <SearchBar />
      </div>
    </Nav>
  )
}
