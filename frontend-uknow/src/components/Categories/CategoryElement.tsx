interface TopicProp {
  topic: string
}

export const CategoryElement = ({ topic }: TopicProp) => {
  return (
    // <Card style={{ width: '200px' }}>
    //   <div className='text-center p-2 pb-0'>
    //     <Card.Img src={img} style={{ width: '50px', height: '50px' }} />
    //   </div>
    //   <Card.Body className='p-0'>
    //     <Card.Title className='text-center m-0 p-2'>{title}</Card.Title>
    //   </Card.Body>
    // </Card>
    <div className='border border-dark rounded p-1'>{topic}</div>
  )
}
