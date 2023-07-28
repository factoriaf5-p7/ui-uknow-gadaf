import { Button } from 'react-bootstrap'
import styles from './TopicChip.module.css'

interface TopicProps {
  title: string;
}

export const TopicChip = ({ title }: TopicProps) => {
  return (
    <Button
      className={`${styles.chip} ${styles.customButton}`}
    >
      <span className={styles.chipText}>{title}</span>
    </Button>
  )
}
