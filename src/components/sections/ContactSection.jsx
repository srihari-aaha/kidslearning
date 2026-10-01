import React, { useState } from 'react';
import Container from '../common/Container';
import ScrollReveal from '../common/ScrollReveal';
import Button from '../common/Button';
import {
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  Sparkles,
  Calendar
} from 'lucide-react';
import { courses } from '../../data/courses';

export default function ContactSection({ onBookDemo }) {
  const [formData, setFormData] = useState({
    parentName: '',
    contactInfo: '',
    childAge: '',
    course: 'phonics',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.parentName || !formData.contactInfo) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section section-padding" aria-label="Contact Section">
      <Container>
        {/* Section Header */}
        <div className="section-header">
          <ScrollReveal direction="up" delay={0}>
            
            <div className="section-eyebrow">
              <Sparkles size={13} />
              <span>Get In Touch</span>
            </div>
            <h2 className="section-title">We'd Love to Hear from You</h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <p className="section-description">
              Have questions about our curriculum, scheduling, or small batches? Reach out and our learning advisors will guide you to the perfect program for your child.
            </p>
          </ScrollReveal>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="contact-main-grid">
          {/* Left Column: Direct Contact Info & Fast Demo Card */}
          <ScrollReveal direction="right" delay={140} className="contact-info-col">
            <div className="contact-info-card">
              <h3 className="contact-info-heading">Direct Contact</h3>
              <p className="contact-info-subtext">
                Speak directly with an academic mentor or request an instant callback.
              </p>

              <div className="contact-details-list">
                <a href="tel:+919876543210" className="contact-channel-item">
                  <div className="channel-icon-box phone-box">
                    <Phone size={20} />
                  </div>
                  <div className="channel-text">
                    <span className="channel-label">Phone & WhatsApp</span>
                    <span className="channel-value">+91 98765 43210</span>
                  </div>
                </a>

                <a href="mailto:hello@lernersspace.com" className="contact-channel-item">
                  <div className="channel-icon-box mail-box">
                    <Mail size={20} />
                  </div>
                  <div className="channel-text">
                    <span className="channel-label">Email Inquiries</span>
                    <span className="channel-value">hello@lernersspace.com</span>
                  </div>
                </a>

                <div className="contact-channel-item">
                  <div className="channel-icon-box clock-box">
                    <Clock size={20} />
                  </div>
                  <div className="channel-text">
                    <span className="channel-label">Operating Hours</span>
                    <span className="channel-value">Mon – Sat: 9:00 AM – 9:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Free Trial Highlight Box */}
              <div className="contact-demo-callout">
                <div className="callout-header">
                  <Calendar size={18} className="callout-icon" />
                  <h4>Prefer a 1-on-1 Trial Class?</h4>
                </div>
                <p>
                  Experience our interactive teaching firsthand with a free 30-minute diagnostic session.
                </p>
                <Button
                  variant="primary"
                  size="md"
                  onClick={onBookDemo}
                  className="contact-demo-btn"
                >
                  Book Free Demo Class
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Interactive Inquiry Form */}
          <ScrollReveal direction="left" delay={180} className="contact-form-col">
            <div className="contact-form-card">
              <h3 className="contact-form-title">Send Us a Message</h3>
              <p className="contact-form-desc">
                Fill in your details below and we will get back to you within 2 hours.
              </p>

              {submitted ? (
                <div className="contact-success-state" role="alert">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={36} color="#16A34A" />
                  </div>
                  <h4>Thank You, {formData.parentName}!</h4>
                  <p>
                    We have received your inquiry. One of our course advisors will connect with you shortly on <strong>{formData.contactInfo}</strong>.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        parentName: '',
                        contactInfo: '',
                        childAge: '',
                        course: 'phonics',
                        message: ''
                      });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group-row">
                    <div className="form-field">
                      <label htmlFor="contact-parent-name" className="form-label">
                        Parent's Name <span className="required">*</span>
                      </label>
                      <input
                        id="contact-parent-name"
                        type="text"
                        required
                        className="form-input"
                        placeholder="e.g. Priya Sharma"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="contact-info" className="form-label">
                        Phone or Email <span className="required">*</span>
                      </label>
                      <input
                        id="contact-info"
                        type="text"
                        required
                        className="form-input"
                        placeholder="e.g. +91 9876543210 or email"
                        value={formData.contactInfo}
                        onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group-row">
                    <div className="form-field">
                      <label htmlFor="contact-child-age" className="form-label">
                        Child's Age
                      </label>
                      <input
                        id="contact-child-age"
                        type="text"
                        className="form-input"
                        placeholder="e.g. 6 years"
                        value={formData.childAge}
                        onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="contact-course-select" className="form-label">
                        Program of Interest
                      </label>
                      <select
                        id="contact-course-select"
                        className="form-select"
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      >
                        {courses.map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.title} ({c.age})
                          </option>
                        ))}
                        <option value="general">Not sure yet / General inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-message" className="form-label">
                      Your Message or Questions
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      className="form-textarea"
                      placeholder="Tell us about your child's learning stage or any questions you have..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="contact-submit-btn">
                    <Send size={16} />
                    <span>Send Message</span>
                  </button>

                  <div className="contact-guarantee-note">
                    <CheckCircle2 size={13} color="#16A34A" />
                    <span>We respect your privacy. No spam or unsolicited calls ever.</span>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
