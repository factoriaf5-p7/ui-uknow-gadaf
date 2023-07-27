import styles from './AllCoursesCard.module.css'

interface AllCoursesCardProps {
    img: string,
    rating: number,
    title: string,
    price:number,
}

export const AllCoursesCard = ({ img, rating, title, price }: AllCoursesCardProps) => {
  return (
    <div className={styles.courseCard}>
      <div>
        <img src={img} alt='logo' />
      </div>
      <p className='fw-bold'>{title}</p>
      <p className='fw-semibold'>{rating} ⭐</p>
      <p className='fw-semibold'>{price}</p>
    </div>
  )
}
