import React from 'react';

/**
 * Reusable Button Component
 * Follows Primary (Blue + white) and Secondary (White + blue border) design
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  icon: Icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  ...props
}) {
  const variantClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    'cta-light': 'btn-cta-light',
    'cta-outline': 'btn-cta-outline'
  }[variant] || 'btn-primary';

  const sizeClass = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg'
  }[size] || '';

  const widthStyle = fullWidth ? { width: '100%' } : {};

  return (
    <button
      type={type}
      className={`btn ${variantClass} ${sizeClass} ${className}`.trim()}
      onClick={onClick}
      style={widthStyle}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon size={18} aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={18} aria-hidden="true" />}
    </button>
  );
}
