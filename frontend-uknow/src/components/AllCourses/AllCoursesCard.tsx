// import { Card } from 'react-bootstrap'
import Img from '../../assets/python.png'
import { StarRating } from '../StarRating/StarRating'
import styles from './AllCoursesCard.module.css'

interface AllCoursesCardProps {
    img: string,
    rating: number,
    title: string,
    price:number
}

export const AllCoursesCard = ({ img, rating, title, price }: AllCoursesCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={img} alt='Python' />
      </div>
      <div className={styles.info}>
        <h1>{title}</h1>
        <p>{rating}</p>
        {/* <StarRating /> */}
        <p>{price}</p>
      </div>

    </div>
  )
}



//  <Card>
//       <Card.Img src={Img} style={{ width: '50px' }} />
//       <Card.Body>
//         <Card.Title>{title}</Card.Title>
//         <Card.Text>{price}</Card.Text>
//         <Card.Text>{rating}</Card.Text>
//       </Card.Body>
//     </Card>
