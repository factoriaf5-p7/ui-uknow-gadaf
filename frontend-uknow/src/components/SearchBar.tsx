import { useState, ChangeEvent } from 'react'
import { Container, InputGroup } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { Search } from 'react-bootstrap-icons'
import styles from './Header/Header.module.css'
import { useSearchContext } from '../SearchContext'

export const SearchBar = () => {
  // const [courses, setCourses] = useState<any[]>([])
  const [keyword, setKeyword] = useState<string>('')
  const { searchKeywords } = useSearchContext()

  const fetchCourses = (keyword: string) => {
    fetch('http://localhost:3000/api/courses') // Corrected the URL to use 'http'
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
      })
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const lowerCase = event.target.value.toLowerCase()
    setKeyword(lowerCase)
    console.log(keyword)
    fetchCourses(keyword)
  }

  return (
    <>
      <Container className={styles.container}>
        <InputGroup className='mb-3'>
          <Form.Control
            onChange={handleChange}
            value={keyword}
            placeholder='Search...'
            className='search-bar'
          />
          <Search
            className={styles.icon}
            type='submit'
          />
        </InputGroup>
      </Container>

    </>
  )
}
