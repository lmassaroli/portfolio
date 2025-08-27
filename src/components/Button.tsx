import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  title?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  onClick,
  href,
  target,
  rel,
  title,
  className = '',
  type = 'button',
}) => {
  const baseClass = styles.button;
  const variantClass = styles[variant];
  const sizeClass = size !== 'medium' ? styles[size] : '';
  const loadingClass = loading ? styles.loading : '';
  
  const buttonClasses = [
    baseClass,
    variantClass,
    sizeClass,
    loadingClass,
    className
  ].filter(Boolean).join(' ');

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        title={title}
        className={buttonClasses}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
      title={title}
    >
      {children}
    </button>
  );
};

export default Button;
