import React, { FC, forwardRef, ReactNode } from 'react';

export interface IButtonProps {
  children: ReactNode;
  onClick?: () => void;
  typeColor?: 'primary' | 'secondary' | 'success' | 'danger';
  className?: string;
  disabled?: boolean;
  width?: string;
}

const typeStyles = {
  primary:
    'text-button-secondary bg-stroke-tertiary rounded-lg hover:bg-blue-600',
  secondary:
    'text-button-primary bg-white border-2 rounded-lg hover:bg-gray-600',
  success:
    'text-button-secondary bg-green text-white rounded-lg hover:bg-green-600',
  danger:
    'text-button-secondary bg-error text-white rounded-lg hover:bg-red-600',
};

const Button: FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > &
    IButtonProps &
    React.RefAttributes<HTMLButtonElement>
> = forwardRef(
  ({ children, typeColor = 'primary', className = '', ...props }, ref) => {
    const baseStyles =
      'px-4 py-2 font-semibold rounded focus:outline-none transition duration-200';

    const disabledStyles = 'opacity-50 cursor-not-allowed';
    const buttonClasses = `${baseStyles} ${typeStyles[typeColor]} ${props.disabled ? disabledStyles : ''} ${className}`;

    return (
      <button {...props} ref={ref} className={buttonClasses}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
