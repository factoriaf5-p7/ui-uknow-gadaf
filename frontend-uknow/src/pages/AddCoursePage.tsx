import React, { useState } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'

interface FormType {
  name: string;
  price: string;
  topic: string;
  difficulty: string;
  tags: string;
  content: string;
  category: string
}

export const AddCoursePage = () => {
  const [newCourse, setNewCourse] = useState<FormType>({
    name: '',
    price: '',
    topic: '',
    difficulty: '',
    tags: '',
    content: '',
    category: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setNewCourse((prevNewCourse) => ({
      ...prevNewCourse,
      userId: localStorage.getItem('id'),
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const userId = localStorage.getItem('id')
      const response = await axios.post(
        `http://localhost:3000/api/courses/create/${userId}`,
        newCourse
      )
      console.log(response.data)
      console.log(newCourse)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <h2>Create course.</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type='text'
            name='name'
            value={newCourse.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Price
          <input
            type='number'
            name='price'
            value={newCourse.price}
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
          Tags
          <input
            type='text'
            name='tags'
            value={newCourse.tags}
            onChange={handleChange}
            placeholder='tag1,tag2'
          />
        </label>
        <label>
          Content
          <input
            type='text'
            name='content'
            value={newCourse.content}
            onChange={handleChange}
          />
        </label>
        <button type='submit'>Add Course</button>
      </form>
    </Container>
  )
}
