import { FC } from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export const Button: FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};
