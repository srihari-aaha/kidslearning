import React, { useState } from 'react';
import Modal from '../common/Modal';
import Button from '../common/Button';
import { CheckCircle2, MessageCircle } from 'lucide-react';

export default function ContactModal({
  isOpen,
  onClose
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const handleReset = () => {
    setSent(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={sent ? handleReset : onClose}
      title={sent ? 'Message Sent' : 'Talk with Academic Counselor'}
    >
      {sent ? (
        <div className="modal-success-state">
          <div className="modal-success-icon">
            <CheckCircle2 size={32} />
          </div>
          <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px', color: '#172033' }}>
            Thank You, {formData.name || 'Friend'}!
          </h4>
          <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '20px', lineHeight: '1.5' }}>
            Our academic advisor will get in touch shortly to answer your questions and guide your child’s learning path.
          </p>
          <Button variant="primary" onClick={handleReset}>
            Done
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '16px' }}>
            Have questions about our curriculums, batch timings, or 1-on-1 programs? We're here to help!
          </p>

          <div className="form-group">
            <label className="form-label" htmlFor="contactName">Your Name</label>
            <input
              id="contactName"
              name="name"
              type="text"
              required
              placeholder="e.g. David Miller"
              className="form-input"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="contactPhone">Phone Number</label>
              <input
                id="contactPhone"
                name="phone"
                type="tel"
                required
                placeholder="+1 (555) 000-0000"
                className="form-input"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="contactEmail">Email Address</label>
              <input
                id="contactEmail"
                name="email"
                type="email"
                required
                placeholder="name@example.com"
                className="form-input"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="contactMsg">How can we help your child?</label>
            <textarea
              id="contactMsg"
              name="message"
              rows="3"
              placeholder="Tell us about your child's age or specific areas of interest..."
              className="form-textarea"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>

          <div style={{ marginTop: '16px' }}>
            <Button type="submit" variant="primary" fullWidth icon={MessageCircle}>
              Send Inquiry
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
}
