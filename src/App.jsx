import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import TrustSection from './components/sections/TrustSection';
import CoursesSection from './components/sections/CoursesSection';
import BenefitsSection from './components/sections/BenefitsSection';
import LearningJourney from './components/sections/LearningJourney';
import ParentSection from './components/sections/ParentSection';
import ReviewsSection from './components/sections/ReviewsSection';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import CTASection from './components/sections/CTASection';
import ExploreCoursePage from './pages/ExploreCoursePage';
import DemoBookingModal from './components/forms/DemoBookingModal';
import ContactModal from './components/forms/ContactModal';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'explore'
  const [selectedCourseId, setSelectedCourseId] = useState('phonics');
  const [activeSection, setActiveSection] = useState('home');
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [preselectedDemoCourse, setPreselectedDemoCourse] = useState('');

  // Always scroll to top on initial page reload / mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ScrollSpy for home page sections
  useEffect(() => {
    if (currentPage !== 'home') return;

    const sectionIds = ['home', 'courses', 'about', 'reviews', 'contact'];
    const handleScroll = () => {
      // Near bottom of page, highlight the final section (contact)
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      const scrollPosition = window.scrollY + 160;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const handleNavigate = (sectionId) => {

    if (currentPage !== 'home') {
      setCurrentPage('home');
      // After transitioning back to home, scroll to requested section
      setTimeout(() => {
        if (sectionId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setActiveSection('home');
        } else {
          const elem = document.getElementById(sectionId);
          if (elem) {
            elem.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
          }
        }
      }, 50);
      return;
    }

    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDemo = (courseName = '') => {
    setPreselectedDemoCourse(courseName);
    setDemoModalOpen(true);
  };

  // Open separate Explore Course page
  const handleOpenExplorePage = (course) => {
    const courseId = typeof course === 'string' ? course : (course?.id || 'phonics');
    setSelectedCourseId(courseId);
    setCurrentPage('explore');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setActiveSection('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="site-wrapper">
      {/* Sticky Header with Navigation & CTAs */}
      <Header
        activeSection={currentPage === 'home' ? activeSection : 'courses'}
        onNavigate={handleNavigate}
        onOpenDemo={() => handleOpenDemo()}
      />

      <main>
        {currentPage === 'home' ? (
          <>
            {/* Hero Section */}
            <HeroSection
              onExploreCourses={() => handleNavigate('courses')}
              onBookDemo={() => handleOpenDemo()}
            />

            {/* Compact Social Proof / Trust Section */}
            <TrustSection />

            {/* 5 Core Learning Programs */}
            <CoursesSection
              onExploreCourse={handleOpenExplorePage}
              onBookDemo={handleOpenDemo}
            />

            {/* Why Lerners Space (4 Key Benefits) */}
            <BenefitsSection />

            {/* 3-Step Learning Journey */}
            <LearningJourney />

            {/* 03. About Us: Academy Story & Parent Guidance */}
            <AboutSection onExploreCourses={() => handleNavigate('courses')} />
            <ParentSection onTalkToUs={() => handleNavigate('contact')} />

            {/* 04. Reviews: Parent Feedback & Ratings */}
            <ReviewsSection />

            {/* 05. Contact: Get in Touch & Direct Inquiries */}
            <ContactSection onBookDemo={() => handleOpenDemo()} />

            {/* High-Impact Final Call To Action */}
            <CTASection
              onBookDemo={() => handleOpenDemo()}
              onExploreCourses={() => handleNavigate('courses')}
            />
          </>
        ) : (
          /* Separate Dedicated Explore Course Page */
          <ExploreCoursePage
            courseId={selectedCourseId}
            onSelectCourse={(id) => {
              setSelectedCourseId(id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onBackToHome={handleBackToHome}
            onBookDemo={(courseTitle) => handleOpenDemo(courseTitle)}
            onTalkToUs={() => setContactModalOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onCourseClick={(course) => handleOpenExplorePage(course)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Demo Booking Modal */}
      <DemoBookingModal
        key={demoModalOpen ? preselectedDemoCourse || 'open' : 'closed'}
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        preselectedCourse={preselectedDemoCourse}
      />

      {/* Contact / Talk To Us Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
