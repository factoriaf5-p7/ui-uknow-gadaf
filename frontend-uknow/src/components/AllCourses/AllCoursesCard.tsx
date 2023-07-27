// import { Card } from 'react-bootstrap'
import Img from "../../assets/python.png"
import { StarRating } from "../StarRating/StarRating"
import styles from './AllCoursesCard.module.css'

// interface AllCoursesCardProps {
//     img: string,
//     rating: number,
//     title: string,
//     price:number
// }

export const AllCoursesCard = () => {
  return (
    <div className={styles.card}>
<div className={styles.img}>
  <img src={Img} alt="Python" />
</div>
<div className={styles.info}>
  <h1>Python</h1>
<StarRating />
  <p>$150</p>
</div>

    </div>
  )
}

// export const AllCoursesCard = ({ Img, rating, title, price }: AllCoursesCardProps) => {
//   return (

//  <Card>
//       <Card.Img src={Img} style={{ width: '50px' }} />
//       <Card.Body>
//         <Card.Title>{title}</Card.Title>
//         <Card.Text>{price}</Card.Text>
//         <Card.Text>{rating}</Card.Text>
//       </Card.Body>
//     </Card>