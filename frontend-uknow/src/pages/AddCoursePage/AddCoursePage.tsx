import React, { useState } from 'react'
import axios from 'axios'
import styles from './AddCoursePage.module.css'
import { Container } from 'react-bootstrap'

interface FormType {
    title: string;
    topic: string;
    difficulty: string;
    description: string;
    category: string;
    videoURL: string;
    videoTitle: string;
    userId: string;
    image: string,

}

export const AddCoursePage = () => {
  const [newCourse, setNewCourse] = useState<FormType>({
    title: '',
    topic: '',
    difficulty: '',
    description: '',
    image: '',
    category: '',
    videoURL: '',
    videoTitle: '',
    userId: ''

  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setNewCourse((prevNewCourse) => ({
      ...prevNewCourse,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const userId = localStorage.getItem('id')
      const response = await axios.post(
                `http://localhost:3000/api/courses/create/${userId}`,
                {
                  ...newCourse,
                  userId: localStorage.getItem('id')
                }
      )
      console.log(response.data)
      console.log(newCourse)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type='text'
            name='title'
            value={newCourse.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Topic
          <input
            name='topic'
            value={newCourse.topic}
            onChange={handleChange}
          />
        </label>
        <label>
          Image
          <input
            name='image'
            value={newCourse.image}
            onChange={handleChange}
          />
        </label>
        <label>
          Category
          <select
            name='category'
            value={newCourse.category}
            onChange={handleChange}
          >
            <option value=''>Select category</option>
            <option value='Big Data'>Big Data</option>
            <option value='Cloud Computing'>Cloud Computing</option>
            <option value='Cybersecurity'>Cybersecurity</option>
            <option value='Data Science'>Data Science</option>
            <option value='Design'>Design</option>
            <option value='DevOps'>DevOps</option>
            <option value='Electronics'>Electronics</option>
            <option value='Game Development'>Game Development</option>
            <option value='Internet of Things'>Internet of Things</option>
            <option value='Mobile App Development'>Mobile App Development</option>
            <option value='Programming Languages'>Programming Languages</option>
            <option value='Quality Assurance'>Quality Assurance</option>
            <option value='Software Engineering'>Software Engineering</option>
            <option value='Web Development'>Web Development</option>
          </select>
        </label>
        <label>
          Difficulty
          <select
            name='difficulty'
            value={newCourse.difficulty}
            onChange={handleChange}
          >
            <option value=''>Select difficulty</option>
            <option value='Beginner'>Beginner</option>
            <option value='Intermediate'>Intermediate</option>
            <option value='Advanced'>Advanced</option>
            <option value='Expert'>Expert</option>
            <option value='All Levels'>All Levels</option>
          </select>
        </label>
        <label>
          Description
          <input
            type='text'
            name='description'
            value={newCourse.description}
            onChange={handleChange}
          />
        </label>

        <label>
          Video Title
          <input
            type='text'
            name='videoTitle'
            value={newCourse.videoTitle}
            onChange={handleChange}
          />
        </label>

        <label>
          Video Link
          <input
            type='text'
            name='videoURL'
            value={newCourse.videoURL}
            onChange={handleChange}
          />
        </label>

        <button type='submit'>
          <i className='fa fa-plus-circle' aria-hidden='true' />Add Course
        </button>
      </form>
    </Container>
  )
}
