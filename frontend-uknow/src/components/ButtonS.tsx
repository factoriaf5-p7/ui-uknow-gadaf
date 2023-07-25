import { FC } from 'react';
import Button from 'react-bootstrap/Button';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}


export const ButtonS: FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <>
      <Button variant="secondary" className={className} onClick={onClick}>
      {text}
      </Button>
    </>  
  );
};
