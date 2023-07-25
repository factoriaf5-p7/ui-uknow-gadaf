import { Col, Container, Row } from 'react-bootstrap'
import { CategoryElement } from './CategoryElement'

export const Categories = () => {
  const img = 'assets/imgs/img-placeholder.png'
  return (
    <>
      <section>
        <Container>
          <h2>Categories</h2>
          <Row>
            <Col>
              <CategoryElement title='Frontend' img={img} />
            </Col>
            <Col>
              <CategoryElement title='Backend' img={img} />
            </Col>
            <Col>
              <CategoryElement title='UI/UX' img={img} />
            </Col>
          </Row>
          <Row>
            <Col>
              <CategoryElement title='Cybersecurity' img={img} />
            </Col>
            <Col>
              <CategoryElement title='Game development' img={img} />
            </Col>
            <Col>
              <CategoryElement title='Data Science' img={img} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
