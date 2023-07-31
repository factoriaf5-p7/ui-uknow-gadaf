import { Card } from 'react-bootstrap'
import styles from './CourseCard.module.css'

interface CourseCardProps {
  img: string,
  rating: string,
  title: string,
  price: number
}

export const CourseCard = ({ img, rating, title, price }: CourseCardProps) => {
  return (
    <div className={styles['course-card-container']}>
      <div><img src={img} className={styles['course-card-img']} /></div>
      <div className={styles['course-card-info']}>
        <Card.Text className={styles['course-card-title']}>{title}</Card.Text>
        <Card.Text className={styles['course-card-price']}>{price}$</Card.Text>
        <Card.Text className={styles['course-card-rating']}>{rating} ⭐</Card.Text>
      </div>
    </div>
  )
}
