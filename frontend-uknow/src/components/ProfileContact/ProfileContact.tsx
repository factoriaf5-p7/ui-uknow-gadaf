import { Container, Form, Textarea } from 'react-bootstrap'
import styles from './ProfileContact.module.css'
import { ButtonP } from '../ButtonP'
import { useState, FormEvent, ChangeEvent } from 'react'

export const ProfileContact = () => {
  

  return (
    <Container className={styles.container}>
      <Form>
        <Form.Group className='mb-3'>
          <div className='input-icon'>
            <Form.Control
              type='email'
              placeholder='Enter your email'
              name='email'
            />
          </div>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Control
            type='text'
            placeholder='Enter your name'
            name='name'
          />
        </Form.Group>
        <Textarea />
        <ButtonP text='Send' />
      </Form>
    </Container>
  )
}