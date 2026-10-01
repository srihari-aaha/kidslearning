import React, { useState, useEffect } from 'react';
import Container from '../common/Container';
import Button from '../common/Button';
import { Menu, X, BookOpen } from 'lucide-react';

export default function Header({
  activeSection = 'home',
  onNavigate,
  onOpenDemo
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'courses', label: 'Courses' },
    { id: 'about', label: 'About Us' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <Container>
        <div className="header-container">
          {/* Logo */}
          <a
            href="#home"
            className="brand-logo"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            aria-label="Lerners Space Home"
          >
            <div className="brand-icon-wrapper">
              <BookOpen size={20} strokeWidth={2.4} />
            </div>
            <div className="brand-name">
              <span className="brand-title">Lerners Space</span>
              <span className="brand-subtitle">Kids Academy</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Header Action CTA */}
          <div className="header-cta-group">
            <Button
              variant="primary"
              size="sm"
              onClick={onOpenDemo}
            >
              Book a Free Demo
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer open">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
          <div style={{ paddingTop: '8px' }}>
            <Button
              variant="primary"
              fullWidth
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
            >
              Book a Free Demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
