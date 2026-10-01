import React from 'react';

/**
 * Reusable Card Container Component
 */
export default function Card({
  children,
  className = '',
  hoverEffect = true,
  onClick,
  ...props
}) {
  return (
    <div
      className={`card-base ${hoverEffect ? 'card-hoverable' : ''} ${className}`.trim()}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
}
