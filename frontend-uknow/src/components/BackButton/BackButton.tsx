import { ArrowLeftCircle } from 'react-bootstrap-icons'
import styles from './BackButton.module.css'

export const BackButton = () => {
  return (
    <div>
        <a href='../../home'><ArrowLeftCircle className={styles.backButton} /></a>
      
    </div>
  )
}
