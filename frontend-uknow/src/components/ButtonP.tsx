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
    <style type="text/css">
        {`
    .btn-success {
      background-color: #3A591E;
      color: white;
      font-weight:600;
    }
    `}
      </style>
      <Button variant="success" className={className} onClick={onClick}>
      {text}
      </Button>
    </>  
  );
};
