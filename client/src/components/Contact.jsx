import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { sendContactMessage } from '../services/api';
import { Send, Mail, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const { currentTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      await sendContactMessage(formData);
      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message });
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: '100px 24px',
        backgroundColor: currentTheme.bg,
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <span
            style={{
              fontSize: '0.85rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: currentTheme.accent,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              marginBottom: '10px',
            }}
          >
            <Mail size={16} /> Get In Touch
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              color: currentTheme.textPrimary,
            }}
          >
            Let's Work Together
          </h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '40px',
            alignItems: 'start',
          }}
        >
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3
              style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: currentTheme.textPrimary,
                marginBottom: '16px',
              }}
            >
              Have a Project in Mind?
            </h3>
            <p
              style={{
                color: currentTheme.textSecondary,
                fontSize: '1rem',
                lineHeight: '1.7',
                marginBottom: '36px',
              }}
            >
              Feel free to send a message using the form or reach out directly. I am open to full-time roles, freelance projects, and exciting collaborations.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { icon: <Mail size={20} color={currentTheme.accent} />, title: 'Email', detail: 'ayushdhote124@gmail.com' },
                { icon: <Phone size={20} color="#A855F7" />, title: 'Phone', detail: '+91 7803049124' },
                { icon: <MapPin size={20} color="#EC4899" />, title: 'Location', detail: 'Indore, Madhya Pradesh' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="animated-card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '16px',
                    borderRadius: '12px',
                    backgroundColor: currentTheme.inputBg,
                    border: `1px solid ${currentTheme.border}`,
                  }}
                >
                  <div style={{ padding: '10px', borderRadius: '10px', backgroundColor: currentTheme.cardBg }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.85rem', color: currentTheme.textSecondary, fontWeight: '600' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '1rem', color: currentTheme.textPrimary, fontWeight: '600' }}>
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            style={{
              backgroundColor: currentTheme.cardBg,
              border: `1px solid ${currentTheme.border}`,
              borderRadius: '20px',
              padding: '36px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              boxShadow: currentTheme.shadows?.card,
            }}
          >
            {status.success && (
              <div
                style={{
                  padding: '14px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  border: `1px solid ${currentTheme.success}`,
                  color: currentTheme.success,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                }}
              >
                <CheckCircle size={20} /> Message sent successfully! I will respond shortly.
              </div>
            )}

            {status.error && (
              <div
                style={{
                  padding: '14px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(239, 68, 68, 0.15)',
                  border: `1px solid ${currentTheme.error}`,
                  color: currentTheme.error,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                }}
              >
                <AlertCircle size={20} /> {status.error}
              </div>
            )}

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: currentTheme.textPrimary, marginBottom: '8px' }}>
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                required
                className="animated-input"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  backgroundColor: currentTheme.inputBg,
                  border: `1px solid ${currentTheme.border}`,
                  color: currentTheme.textPrimary,
                  fontSize: '0.95rem',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: currentTheme.textPrimary, marginBottom: '8px' }}>
                Your Email *
              </label>
              <input
                type="email"
                name="email"
                required
                className="animated-input"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  backgroundColor: currentTheme.inputBg,
                  border: `1px solid ${currentTheme.border}`,
                  color: currentTheme.textPrimary,
                  fontSize: '0.95rem',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: currentTheme.textPrimary, marginBottom: '8px' }}>
                Subject
              </label>
              <input
                type="text"
                name="subject"
                className="animated-input"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry / Job Opportunity"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  backgroundColor: currentTheme.inputBg,
                  border: `1px solid ${currentTheme.border}`,
                  color: currentTheme.textPrimary,
                  fontSize: '0.95rem',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: currentTheme.textPrimary, marginBottom: '8px' }}>
                Message *
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="animated-input"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hello, I'd like to discuss a project..."
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  backgroundColor: currentTheme.inputBg,
                  border: `1px solid ${currentTheme.border}`,
                  color: currentTheme.textPrimary,
                  fontSize: '0.95rem',
                  resize: 'vertical',
                }}
              />
            </div>

            <button
              type="submit"
              disabled={status.loading}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '12px',
                background: currentTheme.gradient,
                color: '#FFFFFF',
                fontWeight: '700',
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                marginTop: '10px',
                opacity: status.loading ? 0.7 : 1,
              }}
            >
              <Send size={18} /> {status.loading ? 'Sending Message...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
