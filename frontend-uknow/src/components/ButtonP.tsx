import { FC } from 'react';
import Button from 'react-bootstrap/Button';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}


export const ButtonP: FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <>
      <Button variant="success" className={className} onClick={onClick}>
      {text}
      </Button>
    </>  
  );
};
