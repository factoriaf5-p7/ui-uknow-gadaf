import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './ProfileActions.module.css'

export const ProfileActions = () => {
  return (
    <Container className={styles.container}>
      <h4>Actions</h4>
      <div><button className={styles.button}> Edit profile </button> <button className={styles.button}>Be Happy</button></div>
    </Container>
  )
}
