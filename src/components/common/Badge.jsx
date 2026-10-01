import React from 'react';

/**
 * Reusable Badge Component
 */
export default function Badge({
  children,
  variant = 'blue',
  icon: Icon,
  className = ''
}) {
  const variantClass = {
    blue: 'badge-blue',
    green: 'badge-green',
    warm: 'badge-warm'
  }[variant] || 'badge-blue';

  return (
    <span className={`badge ${variantClass} ${className}`.trim()}>
      {Icon && <Icon size={14} aria-hidden="true" />}
      {children}
    </span>
  );
}
