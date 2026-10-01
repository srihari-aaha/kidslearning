import React from 'react';
import Container from '../common/Container';
import { Star, ShieldCheck } from 'lucide-react';
import { reviewSummary } from '../../data/courses';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function TrustSection() {
  const [sectionRef, isRevealed] = useScrollReveal({ threshold: 0.25 });

  return (
    <section
      ref={sectionRef}
      className={`trust-section ${isRevealed ? 'is-revealed' : ''}`}
      aria-label="Social Proof and Parent Trust"
    >
      <Container>
        <div className="trust-bar">
          <div className="trust-rating-box">
            {/* Step 1: Heading */}
            <span className="trust-highlight-text trust-anim-step-1">
              {reviewSummary.tagline}
            </span>

            {/* Step 2: Star rating (animates during entrance only) */}
            <div className="trust-stars trust-anim-step-2" aria-label="5 out of 5 stars rating">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={17}
                  fill="#FBBF24"
                  color="#FBBF24"
                  className="trust-star-icon"
                  style={{ '--star-delay': `${i * 45}ms` }}
                />
              ))}
            </div>

            {/* Step 3: 49 Reviews follows */}
            <span className="trust-reviews-pill trust-anim-step-3">
              {reviewSummary.reviewCount}
            </span>
          </div>

          {/* Step 4: Supporting text appears */}
          <div className="trust-tagline trust-anim-step-4">
            <ShieldCheck size={16} color="#16A34A" />
            <span>{reviewSummary.subtitle}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
