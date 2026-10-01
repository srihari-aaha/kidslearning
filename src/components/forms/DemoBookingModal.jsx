import React, { useState } from 'react';
import Modal from '../common/Modal';
import Button from '../common/Button';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { courses } from '../../data/courses';

export default function DemoBookingModal({
  isOpen,
  onClose,
  preselectedCourse = ''
}) {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    course: preselectedCourse || 'Phonics',
    phone: '',
    preferredSlot: 'Weekend Morning'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={submitted ? handleReset : onClose}
      title={submitted ? 'Demo Scheduled!' : 'Book a Free Demo Class'}
    >
      {submitted ? (
        <div className="modal-success-state">
          <div className="modal-success-icon">
            <CheckCircle2 size={32} />
          </div>
          <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px', color: '#172033' }}>
            We're Excited to Meet {formData.childName || 'Your Child'}!
          </h4>
          <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '20px', lineHeight: '1.5' }}>
            We have reserved your free demo session for <strong>{formData.course}</strong>. Our academic counselor will call you at <strong>{formData.phone || 'your number'}</strong> to confirm your slot ({formData.preferredSlot}).
          </p>
          <Button variant="primary" onClick={handleReset}>
            Done
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '18px' }}>
            Experience our interactive teaching method with a free 30-minute 1-on-1 session.
          </p>

          <div className="form-group">
            <label className="form-label" htmlFor="parentName">Parent / Guardian Name</label>
            <input
              id="parentName"
              name="parentName"
              type="text"
              required
              placeholder="e.g. Sarah Jenkins"
              className="form-input"
              value={formData.parentName}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="childName">Child's Name</label>
              <input
                id="childName"
                name="childName"
                type="text"
                required
                placeholder="e.g. Leo"
                className="form-input"
                value={formData.childName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="childAge">Child's Age</label>
              <select
                id="childAge"
                name="childAge"
                required
                className="form-select"
                value={formData.childAge}
                onChange={handleChange}
              >
                <option value="">Select age</option>
                <option value="4-5">4 – 5 years</option>
                <option value="6-7">6 – 7 years</option>
                <option value="8-9">8 – 9 years</option>
                <option value="10-12">10 – 12 years</option>
                <option value="13+">13+ years</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="course">Interested Program</label>
              <select
                id="course"
                name="course"
                className="form-select"
                value={formData.course}
                onChange={handleChange}
              >
                {courses.map((c) => (
                  <option key={c.id} value={c.title}>
                    {c.title} ({c.benefit})
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="preferredSlot">Preferred Time</label>
              <select
                id="preferredSlot"
                name="preferredSlot"
                className="form-select"
                value={formData.preferredSlot}
                onChange={handleChange}
              >
                <option value="Weekday Evening (4 PM - 7 PM)">Weekday Evening (4 PM - 7 PM)</option>
                <option value="Weekend Morning (10 AM - 1 PM)">Weekend Morning (10 AM - 1 PM)</option>
                <option value="Weekend Afternoon (2 PM - 5 PM)">Weekend Afternoon (2 PM - 5 PM)</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="phone">Phone / WhatsApp Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="e.g. +1 (555) 234-5678"
              className="form-input"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div style={{ marginTop: '20px' }}>
            <Button
              type="submit"
              variant="primary"
              fullWidth
              icon={Sparkles}
            >
              Confirm Free Demo Slot
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
}
