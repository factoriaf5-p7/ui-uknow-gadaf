import { Container } from 'react-bootstrap'
import styles from './ProfileActions.module.css'
import { Link } from 'react-router-dom'

export const ProfileActions = () => {
  return (
    <Container className={styles.container}>
      <div className={styles.actionBtns}>
        <Link to='/profile'>
          <div className={styles.button}> Edit profile </div>
        </Link>
        <Link to='/mycourses'>
          <div className={styles.button}> Bought courses </div>
        </Link>
        <Link to='/mycourses'>
          <div className={styles.button}> Created courses </div>
        </Link>
        {/* <button className={styles.button}> Be Happy</button> */}
      </div>
    </Container>
  )
}
