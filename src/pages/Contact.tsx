import React, { useState } from 'react';
import { gymConfig } from '../data/gymConfig';
import { PageHeader } from '../components/PageHeader';
import { RatingBadge } from '../components/RatingBadge';

export const Contact: React.FC = () => {
  // Contact form state
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [reason, setReason] = useState('Membership Enquiry');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const enquiryReasons = [
    'Membership Enquiry',
    'Gym Visit / Walk-in Schedule',
    'Personal Training / Floor Coaching',
    'Equipment & Facility Query',
    'Other Inquiries',
  ];

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!name.trim()) errs.name = 'Please provide your name';
    if (!contactInfo.trim()) errs.contactInfo = 'Please enter your phone number or email address';
    if (!message.trim()) errs.message = 'Please include a brief message or question';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Honest submission simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 600);
  };

  return (
    <div className="bg-[#0A0A09] text-[#F2F0E9] min-h-screen">
      {/* Page Hero */}
      <PageHeader
        eyebrow="CONTACT & LOCATION"
        headline="LET'S TALK ABOUT YOUR GOALS."
        supportingText="Questions about membership or the gym? Get in touch with Level Up Fitness, Mathikere."
        showRating={true}
      />

      {/* Main Contact Grid */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Business Details & Opening Hours */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#777C57] font-semibold">
                HEADQUARTERS
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wider text-[#F2F0E9] mt-2">
                {gymConfig.name}
              </h2>
              <p className="mt-1 text-xs uppercase tracking-widest text-[#777C57] font-mono">
                {gymConfig.category}
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${gymConfig.phoneRaw}`}
                className="px-5 py-3 bg-[#777C57] text-[#0A0A09] text-xs font-display font-bold uppercase tracking-widest hover:bg-[#F2F0E9] transition-editorial inline-flex items-center gap-2"
              >
                <span>CALL THE GYM</span>
                <span>☎</span>
              </a>
              <a
                href={gymConfig.googleSnapshot.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 border border-[#F2F0E9]/30 text-[#F2F0E9] text-xs font-display font-semibold uppercase tracking-widest hover:border-[#777C57] hover:text-[#777C57] transition-editorial inline-flex items-center gap-2"
              >
                <span>GET DIRECTIONS</span>
                <span>↗</span>
              </a>
            </div>

            {/* Address & Landmark Block */}
            <div className="p-6 bg-[#171715] border border-[#F2F0E9]/10 space-y-4">
              <div>
                <h4 className="text-xs font-mono uppercase text-[#AAA79F] tracking-wider">
                  Physical Address
                </h4>
                <p className="text-sm text-[#F2F0E9] leading-relaxed mt-1">
                  {gymConfig.locationFull}
                </p>
              </div>

              <div className="pt-3 border-t border-[#F2F0E9]/10">
                <h4 className="text-xs font-mono uppercase text-[#AAA79F] tracking-wider">
                  Prominent Landmarks
                </h4>
                <p className="text-xs text-[#AAA79F] mt-1">
                  • Directly opposite JP Park ground<br />
                  • Next to Reliance Supermarket<br />
                  • Located in Athriya Towers (Brindavan Nagar / SBM Colony)
                </p>
              </div>

              <div className="pt-3 border-t border-[#F2F0E9]/10">
                <h4 className="text-xs font-mono uppercase text-[#AAA79F] tracking-wider">
                  Direct Line
                </h4>
                <a
                  href={`tel:${gymConfig.phoneRaw}`}
                  className="text-lg font-display text-[#F2F0E9] hover:text-[#777C57] transition-editorial block mt-1"
                >
                  {gymConfig.phone}
                </a>
              </div>
            </div>

            {/* Opening Hours Schedule */}
            <div className="p-6 bg-[#171715] border border-[#F2F0E9]/10 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono uppercase text-[#F2F0E9] tracking-wider font-semibold">
                  OPERATIONAL HOURS
                </h4>
                <span className="text-[10px] font-mono uppercase text-[#777C57] px-2 py-0.5 bg-[#0A0A09] border border-[#F2F0E9]/10">
                  {gymConfig.openingHours.snapshotNote}
                </span>
              </div>

              <div className="divide-y divide-[#F2F0E9]/10 text-xs">
                {gymConfig.openingHours.schedule.map((item, idx) => (
                  <div key={idx} className="py-2.5 flex items-center justify-between">
                    <span className="text-[#AAA79F]">{item.days}</span>
                    <span className="font-semibold text-[#F2F0E9] font-mono">{item.hours}</span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-[#AAA79F]/80 leading-relaxed pt-2 border-t border-[#F2F0E9]/10">
                {gymConfig.openingHours.notice}
              </p>
            </div>

            {/* Rating verification */}
            <RatingBadge variant="minimal" />
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#171715] border border-[#F2F0E9]/10 p-6 sm:p-10">
              <div className="mb-8">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#777C57] font-semibold">
                  DIRECT INQUIRY
                </span>
                <h3 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-wide text-[#F2F0E9] mt-1">
                  SEND AN ENQUIRY
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#AAA79F]">
                  Leave your message and our Mathikere desk will respond within business hours.
                </p>
              </div>

              {submitSuccess ? (
                <div className="py-12 text-center space-y-4 bg-[#0A0A09] border border-[#777C57]/40 p-8">
                  <div className="w-12 h-12 mx-auto bg-[#777C57]/20 border border-[#777C57] flex items-center justify-center text-[#777C57] font-display text-2xl">
                    ✓
                  </div>
                  <h4 className="font-display text-2xl uppercase text-[#F2F0E9]">
                    MESSAGE RECEIVED
                  </h4>
                  <p className="text-xs sm:text-sm text-[#AAA79F] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{name}</strong>. Your enquiry regarding &ldquo;{reason}&rdquo; has been logged. Our team will contact you shortly via <strong>{contactInfo}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitSuccess(false);
                      setName('');
                      setContactInfo('');
                      setMessage('');
                    }}
                    className="mt-4 px-6 py-2.5 border border-[#F2F0E9]/20 text-xs font-mono uppercase text-[#F2F0E9] hover:border-[#777C57] hover:text-[#777C57] transition-editorial"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} noValidate className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="contactName" className="block text-xs font-mono uppercase text-[#AAA79F] mb-2">
                      Your Name <span className="text-[#777C57]">*</span>
                    </label>
                    <input
                      id="contactName"
                      name="contactName"
                      autoComplete="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Arun Kumar"
                      className={`w-full px-4 py-3.5 bg-[#0A0A09] border text-sm text-[#F2F0E9] focus:outline-none focus:border-[#777C57] transition-editorial ${
                        errors.name ? 'border-red-500' : 'border-[#F2F0E9]/10'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400 font-mono">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone or Email */}
                  <div>
                    <label htmlFor="contactInfo" className="block text-xs font-mono uppercase text-[#AAA79F] mb-2">
                      Phone Number or Email <span className="text-[#777C57]">*</span>
                    </label>
                    <input
                      id="contactInfo"
                      name="contactInfo"
                      autoComplete="email tel"
                      inputMode="text"
                      type="text"
                      value={contactInfo}
                      onChange={(e) => setContactInfo(e.target.value)}
                      placeholder="e.g. +91 99169 90052 or arun@example.com"
                      className={`w-full px-4 py-3.5 bg-[#0A0A09] border text-sm text-[#F2F0E9] focus:outline-none focus:border-[#777C57] transition-editorial ${
                        errors.contactInfo ? 'border-red-500' : 'border-[#F2F0E9]/10'
                      }`}
                    />
                    {errors.contactInfo && (
                      <p className="mt-1 text-xs text-red-400 font-mono">{errors.contactInfo}</p>
                    )}
                  </div>

                  {/* Reason for Enquiry */}
                  <div>
                    <label htmlFor="contactReason" className="block text-xs font-mono uppercase text-[#AAA79F] mb-2">
                      Reason for Enquiry
                    </label>
                    <select
                      id="contactReason"
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      className="w-full px-4 py-3 bg-[#0A0A09] border border-[#F2F0E9]/10 text-sm text-[#F2F0E9] focus:outline-none focus:border-[#777C57] transition-editorial"
                    >
                      {enquiryReasons.map((item, idx) => (
                        <option key={idx} value={item} className="bg-[#0A0A09] text-[#F2F0E9]">
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contactMessage" className="block text-xs font-mono uppercase text-[#AAA79F] mb-2">
                      Message <span className="text-[#777C57]">*</span>
                    </label>
                    <textarea
                      id="contactMessage"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us what you would like to know about our Mathikere gym..."
                      className={`w-full px-4 py-3 bg-[#0A0A09] border text-sm text-[#F2F0E9] focus:outline-none focus:border-[#777C57] transition-editorial ${
                        errors.message ? 'border-red-500' : 'border-[#F2F0E9]/10'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-400 font-mono">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#777C57] text-[#0A0A09] font-display text-sm font-bold uppercase tracking-widest hover:bg-[#F2F0E9] disabled:opacity-50 transition-editorial flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? 'TRANSMITTING MESSAGE...' : 'SEND INQUIRY'}
                  </button>

                  <p className="text-[11px] text-[#AAA79F]/70 text-center font-mono">
                    Direct inquiries handled respectfully. No third-party spam.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          RESPONSIVE MAP SECTION
          Correctly located in Mathikere opposite JP Park ground on Tank Bund Road
         ========================================================================= */}
      <section className="py-16 bg-[#171715] border-t border-[#F2F0E9]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#777C57] font-semibold">
                MAP LOCATION
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-wide text-[#F2F0E9] mt-1">
                FIND US IN MATHIKERE
              </h2>
            </div>
            <a
              href={gymConfig.googleSnapshot.mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-wider text-[#777C57] hover:underline"
            >
              <span>Open in Google Maps App</span>
              <span>↗</span>
            </a>
          </div>

          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-[#0A0A09] border border-[#F2F0E9]/15">
            <iframe
              title="Level Up Fitness Mathikere Location Map"
              src="https://maps.google.com/maps?q=Athriya+Towers+Tank+Bund+Road+Mathikere+Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 filter invert-[0.9] hue-rotate-[180deg] contrast-[1.1] opacity-85 hover:opacity-100 transition-opacity"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map Location Overlay Card */}
            <div className="absolute top-4 left-4 p-4 bg-[#0A0A09]/95 border border-[#F2F0E9]/20 max-w-xs pointer-events-none hidden sm:block">
              <p className="font-display text-sm text-[#F2F0E9] uppercase font-bold">
                Level Up Fitness
              </p>
              <p className="text-[11px] text-[#AAA79F] mt-1 leading-snug">
                Athriya Towers, Tank Bund Road (Opp. JP Park ground)
              </p>
              <div className="mt-2 text-[10px] font-mono text-[#777C57] uppercase">
                4.9 ★ · 593 Google Reviews
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
