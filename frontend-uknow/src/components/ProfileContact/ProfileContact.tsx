import { Container, Form, InputGroup } from 'react-bootstrap'
import styles from './ProfileContact.module.css'
import { ButtonP } from '../ButtonP'

export const ProfileContact = () => {
  return (
    <Container className={styles.container}>
      <h2 className={styles.contactTitle}>Contact us</h2>
      <Form>
        <Form.Group className='mb-3'>
          <Form.Control
            className={styles.textField}
            type='text'
            placeholder='Enter your name'
            name='name'
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Control
            className={styles.textField}
            type='email'
            placeholder='Enter your email'
            name='email'
          />
        </Form.Group>

        <Form.Group>
          <Form.Control className={styles.textFieldMessage} placeholder='Message'/>
        </Form.Group>
        <br />
        <ButtonP className={styles.buttonSubmit} text='Send' />
      </Form>
    </Container>
  )
}
