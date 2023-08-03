import { ButtonHTMLAttributes, FC } from 'react'
import Button from 'react-bootstrap/Button'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: () => void;
  className?: string;
  icon: HTMLElement;
}

export const ButtonP: FC<ButtonProps> = ({ type, text, icon, onClick, className }) => {
  return (
    <>
      <style type='text/css'>
        {`
    .btn-success {
      background-color: #3A591E;
      color: white;
      font-weight:600;
      border-color:#3A591E;
      border-radius: 30px;
    }
    `}
      </style>
      <Button variant='success' className={className} onClick={onClick} type={type}>
        {text}
        {icon}
      </Button>
    </>
  )
}
