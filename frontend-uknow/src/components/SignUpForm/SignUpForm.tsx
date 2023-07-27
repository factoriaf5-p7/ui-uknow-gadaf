import { ChangeEvent, FormEvent, useState } from 'react'
import { ButtonP } from '../../components/ButtonP'
import { Form } from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import styles from './SignUpForm.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line no-unused-vars
interface ApiError {
  message: string;
}
export const SignUpForm = () => {
  const navigate = useNavigate()
  const initialState = {
    email: '',
    password: '',
    name: '',
    last_name: '',
    checkbox: false
  }
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    last_name: '',
    checkbox: false
  })

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Form submitted!')
    if (!formData.checkbox) {
      alert('Please read and accept our Terms of service and Privacy policy.')
      return // Return early if checkbox is not checked
    }
    try {
      await axios.post(
        'http://localhost:3000/api/auth/signup',
        formData,
        {
          headers:
          { 'Content-Type': 'application/json' }
        })
      setFormData(initialState)
      // Now the user must login
      navigate('/auth')
      alert('Now please login')
    } catch (error: ApiError | any) {
      if (error.response && error.response.data && error.response.data.message) {
        return alert(`Errod: ${error.response.data.message}`)
        // modify to add red border to each field and get the message into the div of the form
      } else {
        console.log('An error occurred while signing in.')
      }
    }
  }

  const handleCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked // Get the checkbox state
    setFormData((prevFormData) => ({
      ...prevFormData,
      checkbox: isChecked // Set the checkbox value based on isChecked
    }))
    console.log(isChecked)// Use formData.checkbox instead of FormData.checkbox
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    }
    )
  }

  return (
    <div className={styles.signUpContainer}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3'>
          <div className='input-icon'>
            <Form.Control
              type='email'
              placeholder='Enter your email'
              onChange={handleChange}
              value={formData.email}
              name='email'
            />
          </div>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Control
            type='text'
            placeholder='Enter your name'
            name='name'
            onChange={handleChange}
            value={formData.name}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control
            id={styles.textField}
            type='text'
            placeholder='Enter your last name'
            name='last_name'
            onChange={handleChange}
            value={formData.last_name}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control
            onChange={handleChange}
            value={formData.password}
            name='password'
            type='password'
            id={styles.textField}
            placeholder='Enter your password'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check
            onChange={handleCheckBox}
            checked={formData.checkbox}
            type='checkbox'
            name='checkbox'
            label='By signing you agree to our Terms of service and Privacy policy'
            style={{ fontSize: '12px', color: '#777777' }}
          />
        </Form.Group>

        <ButtonP text='Sign Up' />
      </Form>
    </div>
  )
}
