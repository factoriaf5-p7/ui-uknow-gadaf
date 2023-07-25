import { Container } from 'react-bootstrap'
import { CourseCard } from './CourseCard'

export const PopularCourses = () => {
  const img = 'assets/imgs/img-placeholder.png'

  return (
    <Container>
      <h2>Most popular</h2>

      <div className='d-flex justify-content-between'>
        <CourseCard img={img} rating={0} title='Course 1' price={100} />
        <CourseCard img={img} rating={0} title='Course 2' price={100} />
        <CourseCard img={img} rating={0} title='Course 3' price={100} />
      </div>
    </Container>
  )
}
