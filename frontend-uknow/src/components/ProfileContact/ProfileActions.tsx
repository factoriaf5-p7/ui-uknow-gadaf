import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './ProfileContact.module.css'

export const ProfileContact = () => {
  return (
    <Container className={styles.container}>
      <h4>Contact Form</h4>
      <div>Name <input /> <br />email <input /><br /> Comments <textarea name='' id='' /><br /><button>Send</button></div>
    </Container>
  )
}