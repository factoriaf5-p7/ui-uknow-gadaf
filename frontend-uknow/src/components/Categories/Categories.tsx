import { Col, Container, Row } from "react-bootstrap";
import { CategoryElement } from "./CategoryElement";
import styles from "./Categories.module.css";

export const Categories = () => {
  const img = "assets/imgs/img-placeholder.png";
  return (
    <>
      <section>
        <Container>
          <h2>Categories</h2>
          <div className={styles.cards}>
            <Col>
              <CategoryElement title="Frontend" img={img} />
            </Col>
            <Col>
              <CategoryElement title="Backend" img={img} />
            </Col>
            <Col>
              <CategoryElement title="UI/UX" img={img} />
            </Col>

            <Col>
              <CategoryElement title="Cybersecurity" img={img} />
            </Col>
            <Col>
              <CategoryElement title="Gaming" img={img} />
            </Col>
            <Col>
              <CategoryElement title="DataBase" img={img} />
            </Col>
          </div>
        </Container>
      </section>
    </>
  );
};
