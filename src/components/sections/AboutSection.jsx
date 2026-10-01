import React from 'react';
import Container from '../common/Container';
import Button from '../common/Button';
import ScrollReveal from '../common/ScrollReveal';
import { Sparkles, ArrowRight, Compass } from 'lucide-react';

export default function AboutSection({ onExploreCourses }) {
  return (
    <section id="about" className="about-section section-padding">
      <Container>
        <div className="about-grid">
          {/* Left Column: Image with reversed split direction */}
          <ScrollReveal direction="right" delay={0} className="about-reveal-image">
            <div className="about-image-card">
              <img
                src={`${import.meta.env.BASE_URL}about-learners.jpg`}
                alt="Children learning together at Lerners Space"
                width="480"
                height="360"
                loading="lazy"
              />
              <div className="about-floating-chip" aria-hidden="true">
                <Compass size={16} color="#2563EB" />
                <span>Skill & Curiosity First</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Content with reversed split direction */}
          <ScrollReveal direction="left" delay={140} className="about-reveal-content">
            <div className="about-content">
              
              <div className="section-eyebrow">
                <Sparkles size={13} />
                <span>About Our Academy</span>
              </div>
              <h2>Where Curiosity Meets Learning</h2>
              <p className="about-paragraph">
                Lerners Space helps children build essential skills while encouraging creativity, confidence and curiosity.
              </p>

              <div className="about-values-list">
                <div className="about-value-item">
                  <span className="about-value-dot"></span>
                  <span>Child-Friendly Pace</span>
                </div>
                <div className="about-value-item">
                  <span className="about-value-dot"></span>
                  <span>Hands-On Practice</span>
                </div>
                <div className="about-value-item">
                  <span className="about-value-dot"></span>
                  <span>Active Mentorship</span>
                </div>
                <div className="about-value-item">
                  <span className="about-value-dot"></span>
                  <span>Confidence Building</span>
                </div>
              </div>

              <Button
                variant="secondary"
                icon={ArrowRight}
                onClick={onExploreCourses}
              >
                Explore Courses
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
