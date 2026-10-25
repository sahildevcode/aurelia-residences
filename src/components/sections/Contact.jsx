import React, { useState } from 'react';
import { PROJECT, CONTACT, RESIDENCES } from '../../config/projectData';
import SectionLabel from '../ui/SectionLabel';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    residenceType: RESIDENCES[0].type,
    message: '',
    consent: false,
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.fullName.trim()) {
      setStatus('error');
      setErrorMessage('Please provide your full legal name.');
      return;
    }

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setStatus('error');
      setErrorMessage('Please provide a valid private email address.');
      return;
    }

    if (!formData.phone.trim()) {
      setStatus('error');
      setErrorMessage('Please provide a direct telephone number.');
      return;
    }

    if (!formData.consent) {
      setStatus('error');
      setErrorMessage('Please confirm your consent for private correspondence.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    // Simulated verified submission delay
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="py-28 md:py-36 px-6 md:px-16 lg:px-24"
      style={{ background: 'var(--color-dark)' }}
      aria-label="Private Viewing Inquiry"
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Inquiry Information */}
          <div className="lg:col-span-5 space-y-8">
            <SectionLabel number="09" text="Private Engagement" />

            <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-[var(--color-ivory)] font-light leading-tight">
              Arrange a <br />
              <em className="italic text-[var(--color-accent)] font-serif">Private</em> Viewing
            </h2>

            <p className="font-sans text-sm text-[var(--color-stone)] leading-relaxed">
              Appointments to the Aurelia Presentation Gallery are hosted exclusively on a private,
              one-to-one basis. We invite prospective owners to schedule an audience with our
              Senior Client Director.
            </p>

            <div className="space-y-6 pt-6 border-t border-[rgba(200,190,180,0.1)]">
              <div>
                <span className="font-display text-[0.6rem] tracking-[0.2em] text-[var(--color-concrete)] uppercase block mb-1">
                  Direct Telephone
                </span>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}
                  className="font-editorial text-2xl text-[var(--color-ivory)] hover:text-[var(--color-accent)] transition-colors no-underline"
                >
                  {CONTACT.phone}
                </a>
              </div>

              <div>
                <span className="font-display text-[0.6rem] tracking-[0.2em] text-[var(--color-concrete)] uppercase block mb-1">
                  Private Correspondence
                </span>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="font-sans text-sm text-[var(--color-stone)] hover:text-[var(--color-accent)] transition-colors no-underline"
                >
                  {CONTACT.email}
                </a>
              </div>

              <div>
                <span className="font-display text-[0.6rem] tracking-[0.2em] text-[var(--color-concrete)] uppercase block mb-1">
                  Gallery Schedule
                </span>
                <p className="font-sans text-xs text-[var(--color-concrete)]">
                  {CONTACT.salesHours}
                </p>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-12 border border-[rgba(200,190,180,0.1)] bg-[rgba(26,26,26,0.5)] backdrop-blur-md rounded-sm">
              {status === 'success' ? (
                <div className="text-center py-16 space-y-6">
                  <div className="w-16 h-16 rounded-full mx-auto border border-[var(--color-accent)] flex items-center justify-center text-[var(--color-accent)]">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-editorial text-3xl text-[var(--color-ivory)] font-light">
                    Inquiry Received
                  </h3>
                  <p className="font-sans text-sm text-[var(--color-stone)] max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.fullName}. Our Senior Representative has received your
                    request and will contact you directly within 24 hours to coordinate your visit.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        residenceType: RESIDENCES[0].type,
                        message: '',
                        consent: false,
                      });
                    }}
                    className="btn-ghost mt-4"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-8">
                  {status === 'error' && (
                    <div className="flex items-center gap-3 p-4 bg-[rgba(220,53,69,0.1)] border border-[rgba(220,53,69,0.3)] text-[#ff6b6b] text-xs font-sans rounded-sm">
                      <AlertCircle size={16} />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Lady / Lord / Mr / Mrs..."
                        className="form-input"
                        required
                      />
                    </div>

                    <div>
                      <label className="form-label">Private Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="client@domain.com"
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="form-label">Telephone (with Country Code) *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 / +1 / +44 ..."
                        className="form-input"
                        required
                      />
                    </div>

                    <div>
                      <label className="form-label">Residence of Interest</label>
                      <select
                        name="residenceType"
                        value={formData.residenceType}
                        onChange={handleChange}
                        className="form-input cursor-pointer"
                        style={{ backgroundColor: 'var(--color-dark)' }}
                      >
                        {RESIDENCES.map((res) => (
                          <option key={res.type} value={res.type}>
                            {res.type} ({res.bedrooms})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Specific Inquiries or Requirements</label>
                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please note any spatial requirements, preferred visiting days, or concierge arrangements..."
                      className="form-input resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-1 cursor-pointer accent-[var(--color-accent)]"
                    />
                    <label
                      htmlFor="consent"
                      className="font-sans text-[0.7rem] text-[var(--color-concrete)] cursor-pointer leading-relaxed"
                    >
                      I confirm that my submitted details may be used by the Aurelia Residences sales team
                      exclusively for coordinating private gallery appointments and confidential project briefings.
                    </label>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-primary w-full md:w-auto justify-center"
                    >
                      {status === 'submitting' ? (
                        'Transmitting...'
                      ) : (
                        <>
                          <span>Transmit Private Inquiry</span>
                          <Send size={14} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
