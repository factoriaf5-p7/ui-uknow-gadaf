import { ButtonHTMLAttributes, FC } from 'react'
import Button from 'react-bootstrap/Button'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: () => void;
  className?: string;
}

export const ButtonP: FC<ButtonProps> = ({ type, text, onClick, className }) => {
  return (
    <>
      <style type='text/css'>
        {`
    .btn-success {
      background-color: #3A591E;
      color: white;
      font-weight:600;
      border-color:#3A591E;
    }
    `}
      </style>
      <Button variant='success' className={className} onClick={onClick} type={type}>
        {text}
      </Button>
    </>
  )
}
