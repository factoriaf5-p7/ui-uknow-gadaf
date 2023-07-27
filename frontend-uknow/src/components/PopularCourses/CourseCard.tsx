import { Card } from 'react-bootstrap'

interface CourseCardProps {
    img: string,
    rating: number,
    title: string,
    price:number
}

export const CourseCard = ({ img, rating, title, price }: CourseCardProps) => {
  return (
    <Card className='text-center align-items-center m-2' style={{ width: '150px' }}>
      <Card.Img src={img} style={{ width: '50px' }} />
      <Card.Body className='p-0'>
        <Card.Text className='fw-bold m-0'>{title}</Card.Text>
        <Card.Text className='m-0'>{price}</Card.Text>
        <Card.Text>{rating}</Card.Text>
      </Card.Body>
    </Card>
  )
}
