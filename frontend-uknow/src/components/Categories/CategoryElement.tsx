import { Card } from 'react-bootstrap'

interface CategoryItemProp {
    img: string,
    title: string,

}

export const CategoryElement = ({ img, title }: CategoryItemProp) => {
  return (
    <Card>
      <Card.Img src={img} style={{ width: '50px' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  )
}
