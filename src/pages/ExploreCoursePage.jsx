import React, { useEffect } from 'react';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import ScrollReveal from '../components/common/ScrollReveal';
import {
  Volume2,
  Box,
  PenTool,
  BookOpen,
  Sparkles,
  Calculator,
  Atom,
  FlaskConical,
  Dna,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  ShieldCheck,
  Calendar,
  Gift,
  Award
} from 'lucide-react';
import { courses } from '../data/courses';

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

export default function ExploreCoursePage({
  courseId = 'phonics',
  onSelectCourse,
  onBackToHome,
  onBookDemo,
  onTalkToUs
}) {
  const currentCourse = courses.find((c) => c.id === courseId) || courses[0];
  const IconComponent = iconMap[currentCourse.iconName] || BookOpen;

  // Scroll to top whenever page mounts or courseId changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [courseId]);

  return (
    <div className="explore-page-wrapper">
      {/* Course Hero Banner with Clean Breadcrumb */}
      <section className="explore-hero-section section-padding">
        <Container>
          {/* Subtle Inline Breadcrumb (Replacing the extra sticky top bar) */}
          <nav className="explore-breadcrumb" aria-label="Breadcrumb navigation">
            <button
              type="button"
              className="breadcrumb-link"
              onClick={onBackToHome}
            >
              Home
            </button>
            <span className="breadcrumb-sep">/</span>
            <button
              type="button"
              className="breadcrumb-link"
              onClick={onBackToHome}
            >
              Courses
            </button>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">{currentCourse.title}</span>
          </nav>

          <div className="explore-hero-grid">
            <ScrollReveal direction="left" delay={0}>
              <div className="explore-hero-content">
                <div className="explore-badge-row">
                  <div className="course-icon-badge" aria-hidden="true">
                    <IconComponent size={24} strokeWidth={2.2} />
                  </div>
                  {currentCourse.category && (
                    <span className="badge badge-purple">{currentCourse.category}</span>
                  )}
                  <span className="badge badge-blue">{currentCourse.benefit}</span>
                  <span className="badge badge-warm">{currentCourse.age}</span>
                </div>

                <h1 className="explore-hero-title">{currentCourse.title}</h1>

                <p className="explore-hero-desc">
                  {currentCourse.description}
                </p>

                {/* Key Format Details */}
                <div className="explore-meta-grid">
                  <div className="explore-meta-item">
                    <Clock size={16} color="#2563EB" />
                    <div>
                      <div className="explore-meta-label">Session Duration</div>
                      <div className="explore-meta-val">{currentCourse.sessionLength}</div>
                    </div>
                  </div>

                  <div className="explore-meta-item">
                    <Users size={16} color="#2563EB" />
                    <div>
                      <div className="explore-meta-label">Batch Focus</div>
                      <div className="explore-meta-val">{currentCourse.batchSize}</div>
                    </div>
                  </div>

                  <div className="explore-meta-item">
                    <Calendar size={16} color="#2563EB" />
                    <div>
                      <div className="explore-meta-label">Schedule</div>
                      <div className="explore-meta-val">{currentCourse.duration}</div>
                    </div>
                  </div>
                </div>

                {/* Action CTA Group */}
                <div className="explore-hero-actions">
                  <Button
                    variant="primary"
                    size="lg"
                    icon={Sparkles}
                    onClick={() => onBookDemo(currentCourse.title)}
                  >
                    Book a Free Demo Class
                  </Button>

                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={onTalkToUs}
                  >
                    Talk with Counselor
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Card: Key Highlights */}
            <ScrollReveal direction="right" delay={120}>
              <div className="explore-highlights-card">
                <h3 className="highlights-card-title">What Your Child Develops</h3>
                <div className="highlights-pill-list">
                  {currentCourse.skills?.map((skill, idx) => (
                    <div key={idx} className="highlight-skill-badge">
                      <CheckCircle2 size={16} color="#16A34A" strokeWidth={2.4} />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>

                <div className="explore-reassurance-box">
                  <div className="reassurance-icon">
                    <ShieldCheck size={20} color="#2563EB" />
                  </div>
                  <div>
                    <div className="reassurance-heading">Free 30-Minute Trial</div>
                    <div className="reassurance-sub">Experience our interactive teaching method with zero commitment.</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* NEW SECTION: What You Get From This Course */}
      <section className="what-you-get-section section-padding">
        <Container>
          <div className="section-header">
            <ScrollReveal direction="up" delay={0}>
              <div className="section-eyebrow">
                <Gift size={13} />
                <span>Included Deliverables</span>
              </div>
              <h2 className="section-title">What You Get from This Course</h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <p className="section-description">
                Everything provided to make your child's learning journey engaging, structured and measurable.
              </p>
            </ScrollReveal>
          </div>

          <div className="what-you-get-grid">
            {currentCourse.whatYouGet?.map((item, idx) => (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={80 + idx * 70}
              >
                <div className="what-you-get-card">
                  <div className="what-you-get-icon-box" aria-hidden="true">
                    {idx === currentCourse.whatYouGet.length - 1 ? (
                      <Award size={20} color="#2563EB" />
                    ) : (
                      <CheckCircle2 size={20} color="#16A34A" strokeWidth={2.4} />
                    )}
                  </div>
                  <h3 className="what-you-get-title">{item.title}</h3>
                  <p className="what-you-get-desc">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Structured Curriculum Milestones Section */}
      <section className="explore-curriculum-section section-padding">
        <Container>
          <div className="section-header">
            <ScrollReveal direction="up" delay={0}>
              <div className="section-eyebrow">Structured Curriculum</div>
              <h2 className="section-title">Step-by-Step Learning Milestones</h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <p className="section-description">
                Every lesson builds competence systematically, ensuring steady progress without overwhelm.
              </p>
            </ScrollReveal>
          </div>

          <div className="curriculum-modules-grid">
            {currentCourse.curriculum?.map((module, idx) => (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={100 + idx * 80}
              >
                <div className="curriculum-module-card">
                  <div className="module-badge">Module 0{idx + 1}</div>
                  <h3 className="module-title">{module.title}</h3>
                  <p className="module-desc">{module.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Other Courses Switcher Strip */}
      <section className="explore-other-programs-section section-padding">
        <Container>
          <div className="section-header">
            <ScrollReveal direction="up" delay={0}>
              <div className="section-eyebrow">More Programs</div>
              <h2 className="section-title">Explore Other Courses</h2>
            </ScrollReveal>
          </div>

          <div className="other-programs-grid">
            {courses
              .filter((c) => c.id !== currentCourse.id)
              .map((otherCourse, idx) => {
                const OtherIcon = iconMap[otherCourse.iconName] || BookOpen;
                return (
                  <ScrollReveal key={otherCourse.id} direction="up" delay={idx * 70}>
                    <div
                      className="other-course-card"
                      onClick={() => onSelectCourse(otherCourse.id)}
                      tabIndex={0}
                      role="button"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          onSelectCourse(otherCourse.id);
                        }
                      }}
                    >
                      <div className="other-course-top">
                        <div className="course-icon-badge">
                          <OtherIcon size={20} strokeWidth={2.2} />
                        </div>
                        <span className="badge badge-blue">{otherCourse.benefit}</span>
                      </div>
                      <h4 className="other-course-title">{otherCourse.title}</h4>
                      <p className="other-course-desc">{otherCourse.description}</p>
                      <div className="other-course-action">
                        <span>View Program</span>
                        <ArrowRight size={15} />
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
          </div>
        </Container>
      </section>

      {/* Final Bottom CTA */}
      <section className="cta-section section-padding">
        <Container>
          <div className="cta-box">
            <h2 style={{ color: '#FFFFFF' }}>Ready to Begin in {currentCourse.title}?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Give your child a positive learning start with a free, personal 1-on-1 demo session.
            </p>
            <div className="cta-button-group">
              <Button
                variant="cta-light"
                size="lg"
                icon={Sparkles}
                onClick={() => onBookDemo(currentCourse.title)}
              >
                Book a Free Demo
              </Button>
              <Button
                variant="cta-outline"
                size="lg"
                onClick={onBackToHome}
              >
                Return to Home
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
