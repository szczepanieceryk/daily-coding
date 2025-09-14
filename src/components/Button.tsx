import React from 'react';
interface ButtonProps {
  content: string;
  style: 'primary' | 'secondary';
  onClick: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  content,
  style,
  onClick,
  disabled = false,
  type = 'button',
  className = '',
}) => {
  const baseClasses = 'px-6 py-3 my-3 rounded-md text-white';
  const styleClasses = { primary: 'bg-blue-500', secondary: 'bg-cyan-100 text-black' };
  const buttonClasses = `${baseClasses} ${styleClasses[style]} ${className}`;

  return (
    <button onClick={onClick} className={buttonClasses} disabled={disabled} type={type}>
      {content}
    </button>
  );
};

export default Button;
