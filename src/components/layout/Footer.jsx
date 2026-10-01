import React from 'react';
import Container from '../common/Container';
import { BookOpen, Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import { courses } from '../../data/courses';

function InstagramIcon({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function FacebookIcon({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

function YoutubeIcon({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"></polygon>
    </svg>
  );
}

function LinkedinIcon({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

export default function Footer({ onNavigate, onCourseClick, onOpenContact }) {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'courses', label: 'Courses' },
    { id: 'about', label: 'About' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer className="site-footer" aria-label="Site Footer">
      <Container>
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-brand">
            <div className="footer-brand-title-row">
              <div className="brand-icon-wrapper" style={{ width: '34px', height: '34px' }}>
                <BookOpen size={18} strokeWidth={2.4} />
              </div>
              <h3 style={{ margin: 0, fontSize: '19px', color: '#FFFFFF' }}>Lerners Space</h3>
            </div>
            <p className="footer-tagline">“Learning today. Growing every day.”</p>
            <p className="footer-bio">
              A modern learning academy helping children build essential skills, logical thinking, and creative confidence.
            </p>

            {/* Social Icons per Section 26 */}
            <div className="footer-social-row" aria-label="Social media links">
              <a href="#instagram" className="footer-social-icon" aria-label="Follow us on Instagram" onClick={(e) => e.preventDefault()}>
                <InstagramIcon size={17} />
              </a>
              <a href="#facebook" className="footer-social-icon" aria-label="Follow us on Facebook" onClick={(e) => e.preventDefault()}>
                <FacebookIcon size={17} />
              </a>
              <a href="#youtube" className="footer-social-icon" aria-label="Subscribe on YouTube" onClick={(e) => e.preventDefault()}>
                <YoutubeIcon size={17} />
              </a>
              <a href="#linkedin" className="footer-social-icon" aria-label="Connect on LinkedIn" onClick={(e) => e.preventDefault()}>
                <LinkedinIcon size={17} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="footer-col-title">Links</h4>
            <ul className="footer-links-list">
              {quickLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="footer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links-list">
              {courses.map((course) => (
                <li key={course.id}>
                  <a
                    href={`#${course.id}`}
                    className="footer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      onCourseClick(course);
                    }}
                  >
                    {course.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="footer-col-title">Contact</h4>
            <div className="footer-contact-item">
              <Phone size={16} />
              <span>+1 (800) 482-3580</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={16} />
              <span>hello@lernerspace.edu</span>
            </div>
            <div className="footer-contact-item">
              <MapPin size={16} />
              <span>Learning Hub & Interactive Online Sessions</span>
            </div>
            <div style={{ marginTop: '16px' }}>
              <button
                type="button"
                className="footer-talk-btn"
                onClick={onOpenContact}
              >
                <Sparkles size={14} /> Talk to Academic Advisor
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2026 Lerners Space. All rights reserved.</p>
          <div className="footer-bottom-meta">
            <span>Kids Learning Academy</span>
            <span>•</span>
            <span>Child-Safe Learning Standards</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
