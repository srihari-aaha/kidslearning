import React from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';

/**
 * Reusable ScrollReveal Wrapper Component
 * Triggers smooth, natural reveals both when scrolling down and scrolling up.
 * 
 * @param {Object} props
 * @param {'up' | 'down' | 'left' | 'right' | 'fade' | 'scale'} [props.direction='up'] - Reveal slide direction
 * @param {number} [props.delay=0] - Delay in milliseconds
 * @param {number} [props.duration] - Optional custom duration in milliseconds
 * @param {boolean} [props.once=false] - Whether to animate only once (defaults to false for continuous scrolling)
 * @param {string} [props.className=''] - Extra classes
 * @param {React.ReactNode} props.children - Child elements
 * @param {string} [props.as='div'] - Element tag type
 */
export default function ScrollReveal({
  direction = 'up',
  delay = 0,
  duration,
  once = false,
  threshold = 0.08,
  className = '',
  as: Component = 'div',
  children,
  style = {},
  ...rest
}) {
  const [ref, isRevealed] = useScrollReveal({ threshold, once });

  const customStyle = {
    ...style,
    '--reveal-delay': `${delay}ms`,
    ...(duration ? { '--reveal-duration': `${duration}ms` } : {})
  };

  return (
    <Component
      ref={ref}
      className={`reveal-wrapper reveal-${direction} ${isRevealed ? 'is-revealed' : ''} ${className}`.trim()}
      style={customStyle}
      {...rest}
    >
      {children}
    </Component>
  );
}
