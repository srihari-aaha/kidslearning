import React from 'react';
import Container from '../common/Container';
import { journeySteps } from '../../data/courses';
import { Check } from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function LearningJourney() {
  const [sectionRef, isRevealed] = useScrollReveal({ threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      className={`journey-section section-padding ${isRevealed ? 'is-revealed' : ''}`}
      aria-label="Learning Journey - Discover Learn Grow"
    >
      <Container>
        {/* Section Title Reveal */}
        <div className="section-header journey-header-reveal">
          <div className="section-eyebrow">Learning Journey</div>
          <h2 className="section-title">Discover → Learn → Grow</h2>
          <p className="section-description">
            A clear, structured path from initial assessment to confident mastery.
          </p>
        </div>

        <div className="journey-timeline-container">
          {/* Progressive Connecting Line: scaleX on desktop, scaleY on mobile */}
          <div className="journey-timeline-line" aria-hidden="true"></div>

          {/* Staggered progressive cards: 01 Discover -> 02 Learn -> 03 Grow */}
          <div className="journey-timeline-grid">
            {journeySteps.map((step, idx) => (
              <div
                key={step.step}
                className={`journey-step-card journey-step-${idx + 1}`}
                style={{ '--journey-card-delay': `${320 + idx * 160}ms` }}
              >
                <div className="journey-step-badge">
                  <span className="step-num">{step.step}</span>
                  <div className="step-indicator" aria-hidden="true">
                    <Check size={12} strokeWidth={3} />
                  </div>
                </div>

                <h3 className="journey-step-title">{step.title}</h3>
                <p className="journey-step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
