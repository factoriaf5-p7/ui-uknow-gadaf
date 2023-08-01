import { ChangeEvent, FormEvent, useState } from 'react'
import { ButtonP } from '../../components/ButtonP'
import { Form } from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import styles from './LogInForm.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line no-unused-vars
interface ApiError {
  message: string;
}
export const LogInForm = () => {
  const navigate = useNavigate()
  const initialState = { email: '', password: '' }
  const [formData, setFormData] = useState({ email: '', password: '' })

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const response = await axios.post(
        'http://localhost:3000/api/auth/login',
        formData,
        {
          headers:
        { 'Content-Type': 'application/JSON' }
        })
      sessionStorage.setItem('token', response.data.token)
      navigate('/home')
      setFormData(initialState)
    } catch (error: ApiError | any) {
      if (error.response && error.response.data && error.response.data.message) {
        return alert('Invalid username or password')
        // modify to add red border to each field and get the message into the div of the form
      } else {
        console.log('An error occurred while logging in.')
      }
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    }
    )
  }

  return (
    <div className={styles.logInContainer} id='login'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Control
            onChange={handleChange}
            value={formData.email}
            name='email'
            type='email'
            placeholder='Enter your email'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Control
            onChange={handleChange}
            value={formData.password}
            name='password'
            type='password'
            placeholder='Enter your password'
            id={styles.textField}
          />
        </Form.Group>

        {/* <Form.Text id={styles.forgotPassword}>Forgot password?</Form.Text> */}

        <ButtonP text='Log In' type='submit' />
      </Form>

    </div>
  )
}
