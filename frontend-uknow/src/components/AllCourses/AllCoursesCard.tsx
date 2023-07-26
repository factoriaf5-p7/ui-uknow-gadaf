import { Card } from 'react-bootstrap'

interface AllCoursesCardProps {
    img: string,
    rating: number,
    title: string,
    price:number
}

export const AllCoursesCard = ({ img, rating, title, price }: AllCoursesCardProps) => {
  return (
    <Card>
      <Card.Img src={img} style={{ width: '50px' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Card.Text>{rating}</Card.Text>
      </Card.Body>
    </Card>
  )
}
