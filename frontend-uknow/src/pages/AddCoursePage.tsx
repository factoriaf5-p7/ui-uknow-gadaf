import React, { useState } from 'react'

interface FormType {
    name: string;
    price: string;
    topic: string;
    difficulty: string;
    tags: string;
    content: string;
}

export const AddCoursePage = () => {
  const [newCourse, setNewCourse] = useState<FormType>({
    name: '',
    price: '',
    topic: '',
    difficulty: '',
    tags: '',
    content: ''
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
      const response = await fetch.post(
        'http://localhost:5173/courses/',
        newCourse
      )
      console.log('Response', response.data)
      setNewCourse({
        name: '',
        price: '',
        topic: '',
        difficulty: '',
        tags: '',
        content: ''
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={newCourse.name}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type='number'
            name='price'
            value={newCourse.price}
            onChange={handleChange}
          />
        </label>
        <label>
          <textarea
            name='topic'
            value={newCourse.topic}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type='text'
            name='difficulty'
            value={newCourse.difficulty}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type='text'
            name='tags'
            value={newCourse.tags}
            onChange={handleChange}
          />
        </label>
        <label>
          Attenuation Level:
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
