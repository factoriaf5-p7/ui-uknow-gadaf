import React, { useState } from 'react'
import axios from 'axios'
import styles from './AddCoursePage.module.css'
import { ButtonP } from '../../components/ButtonP'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { BackButton } from '../../components/BackButton/BackButton'

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
  const navigate = useNavigate()

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
                  userId
                }
      )
      console.log(response.data)
      console.log(newCourse)

      navigate('/mycourses')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <BackButton />
      <div className={styles.formCreateCourse}>
        <h4 className={styles.sectionTitle}>Create your own course</h4>
        <Form.Group className='mb-3'>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3'>
              <div className='input-icon'>
                <Form.Label className={styles.labelForm}>Title</Form.Label>
                <Form.Control
                  type='text'
                  name='title'
                  value={newCourse.title}
                  onChange={handleChange}
                />
              </div>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label className={styles.labelForm}>Description</Form.Label>
              <Form.Control
                type='text'
                name='description'
                value={newCourse.description}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className={styles.labelForm}>Image</Form.Label>
              <Form.Control
                name='image'
                value={newCourse.image}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className={styles.labelForm}>Catergory</Form.Label>
              <Form.Select
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
              </Form.Select>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label className={styles.labelForm}>Topic</Form.Label>
              <Form.Control
                name='topic'
                value={newCourse.topic}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className={styles.labelForm}>Difficulty</Form.Label>
              <Form.Select
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
              </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className={styles.labelForm}>Video Title</Form.Label>
              <Form.Control
                name='videoTitle'
                value={newCourse.videoTitle}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className={styles.labelForm}>Video Link</Form.Label>
              <Form.Control
                name='videoURL'
                value={newCourse.videoURL}
                onChange={handleChange}
              />
            </Form.Group>

            <ButtonP text='Add Course' icon={undefined} />
          </Form>
        </Form.Group>
      </div>
    </>

  )
}
