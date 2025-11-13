import React from 'react';
interface ButtonProps {
  content: string;
  style: 'primary' | 'secondary';
  onClick?: (e: React.FormEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  content,
  style,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}) => {
  const baseClasses = 'px-6 py-3 rounded-md';
  const styleClasses = {
    primary: disabled
      ? 'bg-gray-400 text-white cursor-not-allowed'
      : 'bg-blue-500 hover:bg-blue-800 text-white',
    secondary: disabled
      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
      : 'bg-cyan-100 hover:bg-cyan-300 text-black',
  };
  const buttonClasses = `${baseClasses} ${styleClasses[style]} ${className}`;

  return (
    <button onClick={onClick} className={buttonClasses} disabled={disabled} type={type}>
      {content}
    </button>
  );
};

export default Button;
