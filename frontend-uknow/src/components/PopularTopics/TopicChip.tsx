import { Button } from "react-bootstrap";

interface TopicProps {
  title: string;
}

export const TopicChip = ({ title }: TopicProps) => {
  return <Button>{title}</Button>;
};
