import { ArrowLeft } from 'react-bootstrap-icons'
import styles from './BackButton.module.css'

export const BackButton = () => {
  return (
    <div className={styles.backButton}>
      <a href='../../home'><ArrowLeft className={styles.backButtonIcon} /></a>

    </div>
  )
}
