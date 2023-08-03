import { Container, Form, InputGroup } from 'react-bootstrap'
import styles from './ProfileContact.module.css'
import { ButtonP } from '../ButtonP'

export const ProfileContact = () => {
  return (
    <Container className={styles.containerContact}>
      <h2 className={styles.profileTitles}>Contact us</h2>
      <Form>
        <Form.Group className='mb-3'>
          <Form.Control
            className={styles.textFieldContact}
            type='text'
            placeholder='Enter your name'
            name='name'
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Control
            className={styles.textFieldContact}
            type='email'
            placeholder='Enter your email'
            name='email'
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Control
          as='textarea'
            className={styles.textFieldMessage}
            type='message'
            placeholder='Write your message'
            name='message'
          />
        </Form.Group>
        <br />
        <ButtonP className={styles.buttonSubmit} text='Send' />
      </Form>
    </Container>
  )
}
