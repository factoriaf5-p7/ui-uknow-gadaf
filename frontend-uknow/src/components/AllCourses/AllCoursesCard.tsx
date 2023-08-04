import styles from './AllCoursesCard.module.css'

export interface AllCoursesCardProps {
    image: string,
    rating: string,
    title: string,
    price:number,
}

export const AllCoursesCard = ({ image, rating, title, price }: AllCoursesCardProps) => {
  return (
    <div className={styles.courseCard}>
      <div>
        <img className={styles.cardImg} src={image} alt='logo' />
      </div>
      <p className='fw-bold'>{title}</p>
      <p className='fw-semibold'>{rating} ⭐</p>
      <p className='fw-semibold'>{price} KN</p>
    </div>
  )
}
