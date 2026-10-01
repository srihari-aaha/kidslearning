import React from 'react';
import Container from '../common/Container';
import Button from '../common/Button';
import { ArrowRight, Sparkles } from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function CTASection({
  onBookDemo,
  onExploreCourses
}) {
  const [sectionRef, isRevealed] = useScrollReveal({ threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      className={`cta-section section-padding ${isRevealed ? 'is-revealed' : ''}`}
      aria-label="Call to Action - Get Started"
    >
      <Container>
        <div className="cta-box">
          <div
            className="section-eyebrow cta-step cta-step-1"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.16)',
              color: '#FFFFFF',
              borderColor: 'rgba(255, 255, 255, 0.3)'
            }}
          >
            <Sparkles size={13} />
            <span>Get Started</span>
          </div>

          <h2 className="cta-step cta-step-2">
            Ready to Make Learning More Exciting?
          </h2>

          <p className="cta-step cta-step-3">
            Give your child a learning experience designed to build skills and confidence.
          </p>

          <div className="cta-button-group cta-step cta-step-4">
            <Button
              variant="cta-light"
              size="lg"
              onClick={onBookDemo}
            >
              Book a Free Demo
            </Button>

            <Button
              variant="cta-outline"
              size="lg"
              icon={ArrowRight}
              onClick={onExploreCourses}
            >
              Explore Courses
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
