import React from 'react';
import Container from '../common/Container';
import Button from '../common/Button';
import ScrollReveal from '../common/ScrollReveal';
import { CheckCircle2, MessageCircle, Heart } from 'lucide-react';
import { parentHighlights } from '../../data/courses';

export default function ParentSection({ onTalkToUs }) {
  return (
    <section id="parents" className="parent-section section-padding">
      <Container>
        <div className="parent-grid">
          {/* Left Column: Slides from Left */}
          <ScrollReveal direction="left" delay={0} className="parent-reveal-left">
            <div className="parent-info-col">
              <div className="section-eyebrow">
                <Heart size={13} />
                <span>For Parents</span>
              </div>
              <h2>Learning That Parents Can Feel Good About</h2>
              <p className="parent-intro-text">
                We help children learn in a supportive environment where skills grow naturally and confidence follows.
              </p>
              <Button
                variant="primary"
                size="md"
                icon={MessageCircle}
                onClick={onTalkToUs}
              >
                Talk to Us
              </Button>
            </div>
          </ScrollReveal>

          {/* Right Column: Slides from Right with staggered points */}
          <ScrollReveal direction="right" delay={140} className="parent-reveal-right">
            <div className="parent-points-list">
              {parentHighlights.map((item, index) => (
                <div
                  key={index}
                  className="parent-point-item"
                  style={{ '--point-delay': `${index * 80}ms` }}
                >
                  <div className="parent-point-icon" aria-hidden="true">
                    <CheckCircle2 size={16} strokeWidth={2.4} />
                  </div>
                  <div>
                    <div className="parent-point-title">{item.title}</div>
                    <div className="parent-point-desc">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
