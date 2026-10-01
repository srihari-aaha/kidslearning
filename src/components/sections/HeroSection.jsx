import React, { useState, useEffect } from 'react';
import Container from '../common/Container';
import Button from '../common/Button';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function HeroSection({
  onExploreCourses,
  onBookDemo
}) {
  const [scrollY, setScrollY] = useState(0);
  const [heroRef, isRevealed] = useScrollReveal({ threshold: 0.05, once: false });

  // Subtle scroll parallax capped at 16px
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textParallax = Math.min(scrollY * 0.06, 16);
  const visualParallax = Math.min(scrollY * 0.03, 10);
  const floatParallax = Math.min(scrollY * 0.08, 18);

  return (
    <section
      ref={heroRef}
      id="home"
      className={`hero-section ${isRevealed ? 'is-revealed' : ''}`}
      aria-label="Hero Introduction"
    >
      <Container>
        <div className="hero-grid">
          {/* Left Column: Coordinated Entrance */}
          <div
            className="hero-content"
            style={{ transform: `translate3d(0, -${textParallax}px, 0)` }}
          >
            {/* Step 1: Small category badge */}
            <div className="hero-step hero-step-badge">
              <div className="hero-badge">
                <Sparkles size={14} color="#2563EB" />
                <span>Kids Learning Academy • Ages 4 to 14</span>
              </div>
            </div>

            {/* Step 2: Main heading */}
            <h1 className="hero-title hero-step hero-step-title">
              Make Learning Fun.{' '}
              <span className="hero-title-highlight">Make Every Lesson Count.</span>
            </h1>

            {/* Step 3: Description */}
            <p className="hero-description hero-step hero-step-desc">
              Build strong skills, creativity and confidence through engaging learning programs for children.
            </p>

            {/* Step 4: Buttons */}
            <div className="hero-cta-group hero-step hero-step-cta">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={onExploreCourses}
              >
                Explore Courses
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={onBookDemo}
              >
                Book a Free Demo
              </Button>
            </div>

            {/* Reassurance pills */}
            <div className="hero-reassurance hero-step hero-step-reassurance">
              <div className="hero-reassurance-item">
                <CheckCircle2 size={15} color="#16A34A" />
                <span>Child-Friendly Pacing</span>
              </div>
              <div className="hero-reassurance-item">
                <ShieldCheck size={15} color="#2563EB" />
                <span>Small Batch Focus</span>
              </div>
              <div className="hero-reassurance-item">
                <Heart size={15} color="#FBBF24" />
                <span>Encouraging Mentors</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Illustration & Parallax */}
          <div
            className="hero-visual-wrapper hero-step hero-step-visual"
            style={{ transform: `translate3d(0, -${visualParallax}px, 0)` }}
          >
            <div className="hero-image-card">
              <img
                src="/hero-learner.jpg"
                alt="Child happily learning and solving puzzles with Lerners Space"
                width="480"
                height="360"
                loading="eager"
              />

              {/* Floating decorative elements with gentle ambient movement */}
              <div
                className="hero-floating-tag hero-tag-top float-slow"
                style={{ transform: `translate3d(0, -${floatParallax * 0.6}px, 0)` }}
                aria-hidden="true"
              >
                <span className="hero-float-icon">🧩</span>
                <div>
                  <div className="hero-float-label">Hands-On Logic</div>
                  <div className="hero-float-value">Rubik's & Problem Solving</div>
                </div>
              </div>

              <div
                className="hero-floating-tag hero-tag-bottom float-medium"
                style={{ transform: `translate3d(0, -${floatParallax * 0.4}px, 0)` }}
                aria-hidden="true"
              >
                <span className="hero-float-icon">🔤</span>
                <div>
                  <div className="hero-float-label">Early Literacy</div>
                  <div className="hero-float-value">Phonics & Spelling</div>
                </div>
              </div>

              <div className="hero-badge-corner float-gentle" aria-hidden="true">
                <span className="corner-star">★</span>
                <span>49 Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
