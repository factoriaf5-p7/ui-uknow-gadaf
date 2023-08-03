import { FC } from 'react'
import Button from 'react-bootstrap/Button'

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export const ButtonS: FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <>
      <style type='text/css'>
        {`
    .btn-secondary {
      background-color: white;
      color: #777777;
      font-weight:600;
      border-color: #D7E0D0;
      border-radius: 30px;
    }

    .btn-secondary:hover {
      background-color: #AED581;
      border: none;
    }
    `}
      </style>
      <Button variant='secondary' className={className} onClick={onClick}>
        {text}
      </Button>
    </>
  )
}
