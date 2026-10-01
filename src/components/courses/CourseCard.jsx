import React from 'react';
import {
  Volume2,
  Box,
  PenTool,
  BookOpen,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkle,
  Calculator,
  Atom,
  FlaskConical,
  Dna,
  TrendingUp
} from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';

const iconMap = {
  Volume2,
  Box,
  PenTool,
  BookOpen,
  Sparkles,
  Calculator,
  Atom,
  FlaskConical,
  Dna,
  TrendingUp
};

// Alternating directional movement
const cardDirections = ['card-dir-left', 'card-dir-up', 'card-dir-right', 'card-dir-up', 'card-dir-left'];

/**
 * Thematic Graphic Component
 * Animates ONCE during card viewport entrance
 */
function ThematicEntranceGraphic({ thematicKey }) {
  switch (thematicKey) {
    case 'phonics':
      return (
        <div className="course-micro phonics-micro" aria-hidden="true" title="Phonics phoneme sounds">
          <span className="phonics-char p-1">a</span>
          <span className="phonics-dot">•</span>
          <span className="phonics-char p-2">b</span>
          <span className="phonics-dot">•</span>
          <span className="phonics-char p-3">c</span>
        </div>
      );
    case 'rubiks':
      return (
        <div className="course-micro rubiks-micro" aria-hidden="true" title="Rubik's 3D Cube">
          <svg className="rubiks-svg" viewBox="0 0 36 36" width="36" height="36" fill="none">
            {/* Top face */}
            <path d="M18 4 L30 11 L18 18 L6 11 Z" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M12 7.5 L24 14.5" stroke="#D97706" strokeWidth="1.2" />
            <path d="M24 7.5 L12 14.5" stroke="#D97706" strokeWidth="1.2" />
            {/* Left face */}
            <path d="M6 11 L18 18 L18 31 L6 24 Z" fill="#FCD34D" stroke="#D97706" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M6 17.5 L18 24.5" stroke="#D97706" strokeWidth="1.2" />
            <path d="M12 14.5 L12 27.5" stroke="#D97706" strokeWidth="1.2" />
            {/* Right face */}
            <path d="M18 18 L30 11 L30 24 L18 31 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M18 24.5 L30 17.5" stroke="#FFFBEB" strokeWidth="1.2" strokeOpacity="0.8" />
            <path d="M24 14.5 L24 27.5" stroke="#FFFBEB" strokeWidth="1.2" strokeOpacity="0.8" />
          </svg>
        </div>
      );
    case 'spelling':
      return (
        <div className="course-micro spelling-micro" aria-hidden="true" title="Rule-based spelling">
          <span className="spell-char s-1">s</span>
          <span className="spell-char s-2">p</span>
          <span className="spell-char s-3 highlight">e</span>
          <span className="spell-char s-4 highlight">l</span>
          <span className="spell-char s-5">l</span>
        </div>
      );
    case 'grammar':
      return (
        <div className="course-micro grammar-micro" aria-hidden="true" title="Sentence grammar architecture">
          <span className="grammar-chip g-1">Noun</span>
          <span className="grammar-arrow g-a1">→</span>
          <span className="grammar-chip g-2">Verb</span>
          <span className="grammar-arrow g-a2">→</span>
          <span className="grammar-chip g-3">Idea</span>
        </div>
      );
    case 'writing':
      return (
        <div className="course-micro writing-micro" aria-hidden="true" title="Creative writing wave">
          <svg className="writing-svg" viewBox="0 0 60 20" width="60" height="20" fill="none">
            <path
              className="writing-path-draw"
              d="M2 12 Q 15 3, 30 12 T 58 12"
              stroke="#E11D48"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle className="writing-sparkle-dot" cx="58" cy="12" r="2.5" fill="#F59E0B" />
          </svg>
        </div>
      );
    default:
      return null;
  }
}

export default function CourseCard({
  id,
  title,
  description,
  iconName,
  benefit,
  age,
  ctaText,
  thematicKey,
  accentColor = 'blue',
  highlights = [],
  sessionLength,
  isFeatured = false,
  index = 0,
  onExplore
}) {
  const IconComponent = iconMap[iconName] || BookOpen;
  const [cardRef, isRevealed] = useScrollReveal({ threshold: 0.16 });
  const directionClass = cardDirections[index % cardDirections.length];
  const bentoClass = isFeatured ? 'bento-card-featured' : 'bento-card-standard';

  return (
    <article
      ref={cardRef}
      className={`course-card card-accent-${accentColor} ${bentoClass} ${directionClass} ${isRevealed ? 'is-revealed' : ''}`}
      style={{ '--card-delay': `${index * 90}ms` }}
      tabIndex={0}
      aria-label={`${title} program for ${age || 'learners'}`}
    >
      <div className="course-card-top">
        {/* Card Header with Icon Badge + Thematic Animated Graphic */}
        <div className="course-card-header">
          <div className="course-icon-badge" aria-hidden="true">
            <IconComponent size={24} strokeWidth={2.2} />
          </div>
          <div className="course-header-right">
            {isFeatured && (
              <span className="featured-foundation-pill">
                <Sparkle size={11} strokeWidth={2.6} />
                <span>Popular</span>
              </span>
            )}
            {thematicKey && <ThematicEntranceGraphic thematicKey={thematicKey} />}
          </div>
        </div>

        {/* Badges Row: Age & Benefit */}
        <div className="course-badges-row">
          {age && <span className="course-age-pill">{age}</span>}
          {benefit && (
            <span className="course-benefit-pill">
              <CheckCircle2 size={12} strokeWidth={2.4} />
              <span>{benefit}</span>
            </span>
          )}
        </div>

        {/* Title and Short Description */}
        <h3 className="course-title">{title}</h3>
        <p className="course-description">{description}</p>

        {/* Highlights as Sleek Horizontal Micro-Tags */}
        {highlights && highlights.length > 0 && (
          <div className="course-tags-row" aria-label="Key skills">
            {highlights.slice(0, isFeatured ? 3 : 2).map((item, hIdx) => (
              <span key={hIdx} className="course-micro-tag">
                {item}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Card Footer: Metadata and CTA Button */}
      <div className="course-card-footer">
        {sessionLength && (
          <div className="course-session-meta">
            <Clock size={13} strokeWidth={2.2} />
            <span>{sessionLength}</span>
          </div>
        )}
        <button
          type="button"
          className="course-cta-btn"
          onClick={onExplore}
          aria-label={`${ctaText || 'Explore Course'} - ${title}`}
        >
          <span>{ctaText || 'Explore Course'}</span>
          <ArrowRight size={15} className="course-cta-arrow" />
        </button>
      </div>
    </article>
  );
}
