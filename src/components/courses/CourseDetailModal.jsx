import React from 'react';
import Modal from '../common/Modal';
import Button from '../common/Button';
import { CheckCircle2, Clock, Users, ArrowRight } from 'lucide-react';

export default function CourseDetailModal({
  course,
  isOpen,
  onClose,
  onBookDemo
}) {
  if (!course) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={course.title}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <span className="badge badge-blue">
            <Users size={13} /> {course.age}
          </span>
          <span className="badge badge-green">
            <CheckCircle2 size={13} /> Develops: {course.benefit}
          </span>
          <span className="badge" style={{ backgroundColor: '#F1F5F9', color: '#475569' }}>
            <Clock size={13} /> {course.duration}
          </span>
        </div>

        <div>
          <h4 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '6px', color: '#172033' }}>
            Program Overview
          </h4>
          <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: '1.6' }}>
            {course.overview || course.description}
          </p>
        </div>

        {course.highlights && (
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '8px', color: '#172033' }}>
              Core Learning Milestones
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', padding: 0 }}>
              {course.highlights.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#334155' }}>
                  <CheckCircle2 size={16} color="#2563EB" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div style={{
          padding: '16px',
          backgroundColor: '#EFF6FF',
          borderRadius: '12px',
          border: '1px solid #DBEAFE',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div>
            <div style={{ fontWeight: '700', fontSize: '14px', color: '#1E40AF' }}>
              Want to see your child in action?
            </div>
            <div style={{ fontSize: '13px', color: '#3B82F6' }}>
              Free 30-minute 1-on-1 trial session.
            </div>
          </div>
          <Button
            size="sm"
            onClick={() => {
              onClose();
              onBookDemo(course.title);
            }}
            icon={ArrowRight}
          >
            Book Free Demo
          </Button>
        </div>
      </div>
    </Modal>
  );
}
