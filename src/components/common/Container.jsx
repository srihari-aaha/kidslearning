import React from 'react';

/**
 * Reusable Container Component
 */
export default function Container({
  children,
  className = '',
  as: Component = 'div',
  ...props
}) {
  return (
    <Component className={`container ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}
