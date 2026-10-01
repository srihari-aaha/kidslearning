import React from 'react';

/**
 * Reusable SectionHeader Component
 * Configurable eyebrow, title, and description
 */
export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className = ''
}) {
  const alignClass = align === 'left' ? 'left-aligned' : '';

  return (
    <div className={`section-header ${alignClass} ${className}`.trim()}>
      {eyebrow && <div className="section-eyebrow">{eyebrow}</div>}
      {title && <h2 className="section-title">{title}</h2>}
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
