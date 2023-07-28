import React, { useState } from 'react'
import axios from 'axios'

interface FormType {
  name: string;
  price: string;
  topic: string;
  difficulty: string;
  tags: string;
  content: string;
  image: string,
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
    image: '',
    category: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      const userId = sessionStorage.getItem('id')
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
    <>
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
          <input
            name='category'
            value={newCourse.category}
            onChange={handleChange}
          />
        </label>
        <label>
          Difficulty
          <input
            type='text'
            name='difficulty'
            value={newCourse.difficulty}
            onChange={handleChange}
          />
        </label>
        <label>
          Tags
          <input
            type='text'
            name='tags'
            value={newCourse.tags}
            onChange={handleChange}
          />
        </label>
        <label>
          Upload image
          <input
            type='text'
            name='image'
            value={newCourse.image}
            onChange={handleChange}
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
    </>
  )
}
