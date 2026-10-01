import React from 'react';
import Container from '../common/Container';
import ScrollReveal from '../common/ScrollReveal';
import { Star, ShieldCheck, Award, Users } from 'lucide-react';
import { reviewSummary } from '../../data/courses';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="reviews-section section-padding">
      <Container>
        <div className="section-header">
          <ScrollReveal direction="up" delay={0}>
            
            <div className="section-eyebrow">Community Trust</div>
            <h2 className="section-title">What Parents Say</h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={120}>
            <p className="section-description">
              Trusted by families who value engaging, patient and structured skill building.
            </p>
          </ScrollReveal>
        </div>

        {/* Central Social Proof Showcase Card */}
        <ScrollReveal direction="scale" delay={180}>
          <div className="reviews-social-showcase">
            <div className="reviews-main-card">
              <div className="reviews-stars-row" aria-label="5 stars rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={28} fill="#FBBF24" color="#FBBF24" />
                ))}
              </div>

              <div className="reviews-stat-number">
                {reviewSummary.reviewCount}
              </div>

              <p className="reviews-stat-tagline">
                {reviewSummary.subtitle}
              </p>

              <div className="reviews-badges-strip">
                <div className="trust-pill-item">
                  <ShieldCheck size={16} color="#16A34A" />
                  <span>Verified Feedback</span>
                </div>
                <div className="trust-pill-item">
                  <Users size={16} color="#2563EB" />
                  <span>Small Batch Focus</span>
                </div>
                <div className="trust-pill-item">
                  <Award size={16} color="#FBBF24" />
                  <span>Child-Friendly Learning</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
