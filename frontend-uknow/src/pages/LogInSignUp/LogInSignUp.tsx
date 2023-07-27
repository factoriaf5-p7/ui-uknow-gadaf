import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { ButtonP } from '../../components/ButtonP'
import styles from './LogInSignUp.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Logo from '../../assets/LOGO.png'

export const LogInSignUp = () => {
  const [activeTab, setActiveTab] = useState('logIn')

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <h2 id={styles.welcome}>Welcome to</h2>
        <div className={styles.logo}>
          <img src={Logo} alt='U-know logo' />
        </div>
        <p>Please enter your details</p>
      </div>

      <div className={styles.body}>
        <div className={styles.tabs}>
          <div
            className={`${styles.tab} ${
              activeTab === 'logIn' ? styles.active : ''
            }`}
            onClick={() => setActiveTab('logIn')}
          >
            <p>Log In</p>
          </div>
          <div
            className={`${styles.tab} ${
              activeTab === 'signUp' ? styles.active : ''
            }`}
            onClick={() => setActiveTab('signUp')}
          >
            <p>Sign Up</p>
          </div>
        </div>

        {activeTab === 'logIn'
          ? (
            <div className={styles.logInContainer}>
              <Form>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                  <Form.Control type='email' placeholder='Enter your email' />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicPassword'>
                  <Form.Control
                    id={styles.textField}
                    type='password'
                    placeholder='Enter your password'
                  />
                </Form.Group>

                <Form.Text id={styles.forgotPassword}>Forgot password?</Form.Text>

                <ButtonP text='Log In' />
              </Form>
            </div>
            )
          : (
            <div className={styles.signUpContainer}>
              <Form>
                <Form.Group className='mb-3'>
                  <div className='input-icon'>
                    <Form.Control type='email' placeholder='Enter your name' />
                  </div>
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Control type='email' placeholder='Enter your email' />
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Control
                    id={styles.textField}
                    type='password'
                    placeholder='Enter your password'
                  />
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Control
                    id={styles.textField}
                    type='password'
                    placeholder='Confirm your password'
                  />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                  <Form.Check
                    type='checkbox'
                    label='By signing you agree to our Terms of service and Privacy policy'
                    style={{ fontSize: '12px', color: '#777777' }}
                  />
                </Form.Group>

                <ButtonP text='Sign Up' />
              </Form>
            </div>
            )}
      </div>
    </div>
  )
}
