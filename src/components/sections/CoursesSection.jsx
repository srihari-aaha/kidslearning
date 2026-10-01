import React, { useState, useRef, useLayoutEffect } from 'react';
import Container from '../common/Container';
import ScrollReveal from '../common/ScrollReveal';
import CourseCard from '../courses/CourseCard';
import { courses, gradeCategories } from '../../data/courses';

export default function CoursesSection({ onExploreCourse }) {
  const [activeTab, setActiveTab] = useState('class-1-8');
  const navRef = useRef(null);
  const [sliderStyle, setSliderStyle] = useState({ left: 0, top: 0, width: 0, height: 0, opacity: 0 });

  useLayoutEffect(() => {
    const updateSlider = () => {
      if (!navRef.current) return;
      const activeBtn = navRef.current.querySelector('.grade-tab-btn.is-active');
      if (activeBtn) {
        setSliderStyle({
          left: activeBtn.offsetLeft,
          top: activeBtn.offsetTop,
          width: activeBtn.offsetWidth,
          height: activeBtn.offsetHeight,
          opacity: 1
        });
      }
    };

    updateSlider();
    const timer = setTimeout(updateSlider, 30);
    window.addEventListener('resize', updateSlider);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateSlider);
    };
  }, [activeTab]);

  const currentCategory = gradeCategories.find((cat) => cat.id === activeTab) || gradeCategories[0];
  const activeCourses = courses.filter((c) => c.gradeGroup === activeTab);
  const isSkillsTab = activeTab === 'skills';

  return (
    <section id="courses" className="courses-section section-padding">
      <Container>
        {/* Section Header */}
        <div className="section-header">
          <ScrollReveal direction="up" delay={0}>
            <div className="section-eyebrow">Our Programs</div>
            <h2 className="section-title">Academic & Foundational Programs</h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <p className="section-description">
              Curriculum-aligned coaching and foundational mastery designed to nurture confidence, critical thinking, and academic excellence.
            </p>
          </ScrollReveal>
        </div>

        {/* Grade Bracket Navigation Tabs - Only this has slide animation */}
        <ScrollReveal direction="up" delay={140}>
          <div className="grade-tabs-wrapper">
            <div className="grade-tabs-nav" ref={navRef} role="tablist" aria-label="Grade brackets">
              {/* Sliding Active Pill Indicator */}
              <div
                className="grade-tab-slider"
                style={{
                  transform: `translate3d(${sliderStyle.left}px, ${sliderStyle.top}px, 0)`,
                  width: `${sliderStyle.width}px`,
                  height: `${sliderStyle.height}px`,
                  opacity: sliderStyle.opacity
                }}
                aria-hidden="true"
              />

              {gradeCategories.map((cat) => {
                const isSelected = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    className={`grade-tab-btn ${isSelected ? 'is-active' : ''}`}
                    onClick={() => setActiveTab(cat.id)}
                  >
                    <span className="grade-tab-title">{cat.title}</span>
                    <span className="grade-tab-badge">{cat.badge}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Grade Category Banner Strip */}
        <div className="grade-banner-strip">
          <div className="grade-banner-left">
            <span className="grade-banner-pill">{currentCategory.badge}</span>
            <h3 className="grade-banner-title">{currentCategory.subtitle}</h3>
            <p className="grade-banner-desc">{currentCategory.description}</p>
          </div>
          <div className="grade-banner-right">
            <span className="grade-board-label">Curriculum Alignment:</span>
            <span className="grade-board-tags">{currentCategory.curricula}</span>
          </div>
        </div>

        {/* Courses Grid for Active Grade Tab */}
        <div
          className={`grade-courses-grid ${isSkillsTab ? 'is-bento-grid' : `count-${activeCourses.length}`}`}
          role="region"
          aria-label={`${currentCategory.title} courses`}
        >
          {activeCourses.map((course, index) => {
            const isFeatured = isSkillsTab && index < 2;
            return (
              <CourseCard
                key={course.id}
                index={index}
                isFeatured={isFeatured}
                {...course}
                onExplore={() => onExploreCourse(course)}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
