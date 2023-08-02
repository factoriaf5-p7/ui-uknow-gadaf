import { Container, Form, InputGroup } from 'react-bootstrap'
import styles from './ProfileContact.module.css'
import { ButtonP } from '../ButtonP'

export const ProfileContact = () => {
  return (
    <Container className={styles.container}>
      <h2>Contact us</h2>
      <Form>
        <Form.Group className='mb-3'>
          <Form.Control
            type='text'
            placeholder='Enter your name'
            name='name'
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Control
            type='email'
            placeholder='Enter your email'
            name='email'
          />
        </Form.Group>

        <InputGroup>
          <Form.Control as='textarea' aria-label='With textarea' placeholder='Message' rows={8} />
        </InputGroup>
        <br />
        <ButtonP text='Send' />
      </Form>
    </Container>
  )
}
