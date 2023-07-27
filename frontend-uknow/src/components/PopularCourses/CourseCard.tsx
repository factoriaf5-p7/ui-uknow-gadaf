import { Card } from 'react-bootstrap'

interface CourseCardProps {
    img: string,
    rating: string,
    title: string,
    price:number
}

export const CourseCard = ({ img, rating, title, price }: CourseCardProps) => {
  return (
    <div className='d-flex text-center justify-content-center align-items-center m-2 border border-dark' style={{ width: '220px', height: '120px' }}>
      <div className=''><img src={img} style={{ width: '80px' }} /></div>
      <div className='p-1'>
        <Card.Text className='fw-bold m-0'>{title}</Card.Text>
        <Card.Text className='m-0'>{price}</Card.Text>
        <Card.Text>{rating} ⭐</Card.Text>
      </div>
    </div>
  )
}
