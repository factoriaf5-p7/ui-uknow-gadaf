import { Card } from "react-bootstrap";
import styles from "./CategoryElement.module.css";

interface CategoryItemProp {
  img: string;
  title: string;
}

export const CategoryElement = ({ img, title }: CategoryItemProp) => {
  return (
    <Card className={styles.card}>
      <div className={styles.button}>
        <Card.Img className={styles.img} src={img} />
      </div>
      <Card.Body>
        <Card.Title className={styles.title}>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};
