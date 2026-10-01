import React from 'react';
import Container from '../common/Container';
import ScrollReveal from '../common/ScrollReveal';
import { HeartHandshake, Layers, Lightbulb, UserCheck } from 'lucide-react';
import { benefits } from '../../data/courses';

const iconMap = {
  HeartHandshake,
  Layers,
  Lightbulb,
  UserCheck
};

export default function BenefitsSection() {
  return (
    <section id="why-us" className="benefits-section section-padding">
      <Container>
        <div className="section-header">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-eyebrow">Why Lerners Space</div>
            <h2 className="section-title">A Better Way to Learn</h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={120}>
            <p className="section-description">
              Designed to keep children engaged, curious and confident in every session.
            </p>
          </ScrollReveal>
        </div>

        <div className="benefits-grid">
          {benefits.map((item, idx) => {
            const Icon = iconMap[item.icon] || Lightbulb;
            const direction = idx % 2 === 0 ? 'left' : 'right';
            const delay = 140 + idx * 100;

            return (
              <ScrollReveal
                key={item.id}
                direction={direction}
                delay={delay}
                className="benefit-card-wrapper"
              >
                <div className="benefit-card">
                  <div className="benefit-icon-wrapper" aria-hidden="true">
                    <Icon size={24} strokeWidth={2.2} />
                  </div>
                  <h3 className="benefit-title">{item.title}</h3>
                  <p className="benefit-description">{item.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
