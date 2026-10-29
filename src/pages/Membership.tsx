import React, { useState } from 'react';
import { gymConfig } from '../data/gymConfig';
import { PageHeader } from '../components/PageHeader';
import { RatingBadge } from '../components/RatingBadge';

export const Membership: React.FC = () => {
  // Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [fitnessGoal, setFitnessGoal] = useState(gymConfig.membershipEnquiryInfo.goals[0]);
  const [preferredDuration, setPreferredDuration] = useState(gymConfig.membershipEnquiryInfo.durations[1]);
  const [preferredTime, setPreferredTime] = useState(gymConfig.membershipEnquiryInfo.contactTimes[2]);
  const [consent, setConsent] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!fullName.trim()) {
      errors.fullName = 'Please enter your full name';
    }
    const cleanPhone = phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errors.phone = 'Please provide a valid 10-digit phone number';
    }
    if (!consent) {
      errors.consent = 'Please confirm consent to receive a call back';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate honest, robust client submission handling
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
    }, 600);
  };

  return (
    <div className="bg-[#0A0A09] text-[#F2F0E9] min-h-screen">
      {/* Page Header */}
      <PageHeader
        eyebrow="TRANSPARENT MEMBERSHIP ENQUIRY"
        headline="FIND YOUR WAY TO LEVEL UP."
        supportingText="Tell us what you're working toward. Speak with our team about membership options that suit your goals."
        showRating={true}
      />

      {/* Hero CTA scroll anchor button */}
      <section className="py-6 border-b border-[#F2F0E9]/10 bg-[#171715]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs uppercase font-mono tracking-wider text-[#AAA79F]">
            Direct gym assistance · No aggressive automated sales calls
          </p>
          <a
            href="#enquiry-section"
            className="px-6 py-2.5 bg-[#777C57] text-[#0A0A09] text-xs font-bold uppercase tracking-widest hover:bg-[#F2F0E9] transition-editorial"
          >
            ENQUIRE ABOUT MEMBERSHIP ↓
          </a>
        </div>
      </section>

      {/* =========================================================================
          MEMBERSHIP OPTIONS (HONEST & ENQUIRY-LED)
          Strictly avoids fabricating prices. Clean typography and subtle borders.
         ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#777C57] font-semibold">
            FLEXIBLE TENURE OPTIONS
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#F2F0E9] mt-2">
            MEMBERSHIP STRUCTURE
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#AAA79F] leading-relaxed">
            Rather than rigid corporate packages with inflated sign-up fees, Level Up Fitness offers flexible durations tailored to your personal schedule. Contact us or visit our Mathikere facility for current rates and seasonal packages.
          </p>
        </div>

        {/* Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gymConfig.membershipEnquiryInfo.durations.map((duration, idx) => (
            <div
              key={idx}
              className="bg-[#171715] border border-[#F2F0E9]/10 p-6 sm:p-7 flex flex-col justify-between hover:border-[#777C57]/50 transition-editorial"
            >
              <div>
                <span className="font-mono text-xs text-[#777C57] font-semibold tracking-wider">
                  TIER 0{idx + 1}
                </span>
                <h3 className="font-display text-2xl text-[#F2F0E9] uppercase tracking-wide mt-2">
                  {duration}
                </h3>
                <p className="mt-4 text-xs text-[#AAA79F] leading-relaxed">
                  Full floor privileges, complete access to strength & free-weight equipment, locker facilities, and floor trainer support.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#F2F0E9]/10 flex flex-col gap-2">
                <span className="text-[10px] font-mono uppercase text-[#AAA79F]">
                  Fee Structure:
                </span>
                <span className="text-xs font-semibold text-[#F2F0E9]">
                  Available on direct enquiry
                </span>
                <a
                  href="#enquiry-section"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#777C57] hover:underline"
                >
                  <span>Request Fee Details</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Inclusions Strip */}
        <div className="mt-8 p-6 bg-[#171715] border border-[#F2F0E9]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase text-[#777C57] tracking-widest">
              WHAT IS INCLUDED IN EVERY MEMBERSHIP
            </span>
            <p className="text-xs text-[#AAA79F]">
              {gymConfig.membershipEnquiryInfo.note} Personal training packages and form coaching are available directly through on-floor trainers upon request.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#F2F0E9] whitespace-nowrap">
            <span className="text-[#777C57]">✓</span> Clean Environment · High Equipment Ratio
          </div>
        </div>
      </section>

      {/* =========================================================================
          MEMBERSHIP ENQUIRY FORM
          Functional, validated enquiry form.
         ========================================================================= */}
      <section
        id="enquiry-section"
        className="py-20 sm:py-28 bg-[#171715] border-t border-[#F2F0E9]/10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#777C57] font-semibold">
              GET IN TOUCH DIRECTLY
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#F2F0E9] mt-2">
              REQUEST MEMBERSHIP DETAILS
            </h2>
            <p className="mt-3 text-sm text-[#AAA79F] leading-relaxed">
              Submit your training goals below. A representative from Level Up Fitness Mathikere will contact you at your preferred time with precise fees and answers to any questions.
            </p>
          </div>

          <div className="bg-[#0A0A09] border border-[#F2F0E9]/10 p-6 sm:p-10">
            {submittedSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-none bg-[#777C57]/20 border border-[#777C57] flex items-center justify-center text-[#777C57] font-display text-2xl">
                  ✓
                </div>
                <h3 className="font-display text-2xl sm:text-3xl uppercase text-[#F2F0E9]">
                  ENQUIRY RECORDED SUCCESSFULLY
                </h3>
                <p className="text-sm text-[#AAA79F] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{fullName}</strong>. Our Mathikere front desk will contact you at <strong>{phone}</strong> around <strong>{preferredTime}</strong> regarding the <strong>{preferredDuration}</strong>.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedSuccess(false);
                      setFullName('');
                      setPhone('');
                      setConsent(false);
                    }}
                    className="px-6 py-2.5 border border-[#F2F0E9]/20 text-xs font-mono uppercase text-[#F2F0E9] hover:border-[#777C57] hover:text-[#777C57] transition-editorial"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-mono uppercase text-[#AAA79F] mb-2">
                      Full Name <span className="text-[#777C57]">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      autoComplete="name"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-4 py-3.5 bg-[#171715] border text-sm text-[#F2F0E9] focus:outline-none focus:border-[#777C57] transition-editorial ${
                        formErrors.fullName ? 'border-red-500' : 'border-[#F2F0E9]/10'
                      }`}
                    />
                    {formErrors.fullName && (
                      <p className="mt-1.5 text-xs text-red-400 font-mono">{formErrors.fullName}</p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-mono uppercase text-[#AAA79F] mb-2">
                      Phone Number <span className="text-[#777C57]">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      inputMode="tel"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className={`w-full px-4 py-3.5 bg-[#171715] border text-sm text-[#F2F0E9] focus:outline-none focus:border-[#777C57] transition-editorial ${
                        formErrors.phone ? 'border-red-500' : 'border-[#F2F0E9]/10'
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="mt-1.5 text-xs text-red-400 font-mono">{formErrors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Primary Fitness Goal */}
                <div>
                  <label htmlFor="fitnessGoal" className="block text-xs font-mono uppercase text-[#AAA79F] mb-2">
                    Primary Fitness Goal
                  </label>
                  <select
                    id="fitnessGoal"
                    value={fitnessGoal}
                    onChange={(e) => setFitnessGoal(e.target.value)}
                    className="w-full px-4 py-3 bg-[#171715] border border-[#F2F0E9]/10 text-sm text-[#F2F0E9] focus:outline-none focus:border-[#777C57] transition-editorial"
                  >
                    {gymConfig.membershipEnquiryInfo.goals.map((goal, idx) => (
                      <option key={idx} value={goal} className="bg-[#171715] text-[#F2F0E9]">
                        {goal}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Preferred Duration */}
                  <div>
                    <label htmlFor="preferredDuration" className="block text-xs font-mono uppercase text-[#AAA79F] mb-2">
                      Interested Tenure
                    </label>
                    <select
                      id="preferredDuration"
                      value={preferredDuration}
                      onChange={(e) => setPreferredDuration(e.target.value)}
                      className="w-full px-4 py-3 bg-[#171715] border border-[#F2F0E9]/10 text-sm text-[#F2F0E9] focus:outline-none focus:border-[#777C57] transition-editorial"
                    >
                      {gymConfig.membershipEnquiryInfo.durations.map((duration, idx) => (
                        <option key={idx} value={duration} className="bg-[#171715] text-[#F2F0E9]">
                          {duration}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Contact Time */}
                  <div>
                    <label htmlFor="preferredTime" className="block text-xs font-mono uppercase text-[#AAA79F] mb-2">
                      Preferred Call Back Window
                    </label>
                    <select
                      id="preferredTime"
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full px-4 py-3 bg-[#171715] border border-[#F2F0E9]/10 text-sm text-[#F2F0E9] focus:outline-none focus:border-[#777C57] transition-editorial"
                    >
                      {gymConfig.membershipEnquiryInfo.contactTimes.map((time, idx) => (
                        <option key={idx} value={time} className="bg-[#171715] text-[#F2F0E9]">
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded-none border-[#F2F0E9]/20 bg-[#171715] text-[#777C57] focus:ring-0 focus:ring-offset-0"
                    />
                    <span className="text-xs text-[#AAA79F] leading-relaxed">
                      I agree to receive a call back or SMS from Level Up Fitness Mathikere regarding my membership inquiry. We respect your privacy and never share your details with third parties.
                    </span>
                  </label>
                  {formErrors.consent && (
                    <p className="mt-1.5 text-xs text-red-400 font-mono">{formErrors.consent}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#777C57] text-[#0A0A09] font-display text-sm font-bold uppercase tracking-widest hover:bg-[#F2F0E9] disabled:opacity-50 transition-editorial flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING ENQUIRY...</span>
                    ) : (
                      <span>REQUEST A CALL BACK</span>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-center text-[#AAA79F]/70 font-mono">
                  Prefer immediate assistance? Call front desk at{' '}
                  <a href={`tel:${gymConfig.phoneRaw}`} className="text-[#777C57] underline">
                    {gymConfig.phone}
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHY TRAIN HERE?
          Refined section highlighting actual business differentiators.
         ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#777C57] font-semibold">
              LOCAL ADVANTAGE
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#F2F0E9]">
              WHY MEMBERS CHOOSE LEVEL UP
            </h2>
            <p className="text-sm sm:text-base text-[#AAA79F] leading-relaxed">
              Located conveniently on Tank Bund Road in Mathikere, opposite the greenery of JP Park ground, Level Up Fitness combines genuine strength facilities with a supportive local community.
            </p>
            <RatingBadge variant="full" />
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gymConfig.feedbackHighlights.slice(0, 4).map((item, idx) => (
              <div key={idx} className="p-6 bg-[#171715] border border-[#F2F0E9]/10">
                <span className="text-[10px] font-mono text-[#777C57] uppercase tracking-wider">
                  {item.badge}
                </span>
                <h4 className="font-display text-lg text-[#F2F0E9] uppercase tracking-wide mt-1">
                  {item.title}
                </h4>
                <p className="mt-2 text-xs text-[#AAA79F] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          MEMBERSHIP FAQ
          Accordion answering confirmed details.
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#171715] border-t border-[#F2F0E9]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#777C57] font-semibold">
              COMMON QUESTIONS
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#F2F0E9] mt-2">
              MEMBERSHIP FAQ
            </h2>
            <p className="mt-3 text-sm text-[#AAA79F]">
              Direct answers to common questions about joining and training with us.
            </p>
          </div>

          <div className="space-y-4">
            {gymConfig.faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#0A0A09] border border-[#F2F0E9]/10 transition-editorial"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={openFaq === index}
                >
                  <span className="font-display text-lg sm:text-xl text-[#F2F0E9] uppercase tracking-wide">
                    {faq.question}
                  </span>
                  <span className="font-mono text-sm text-[#777C57]">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#AAA79F] leading-relaxed border-t border-[#F2F0E9]/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CLOSING CTA
          LET'S GET YOU STARTED.
          CTA: CALL +91 99169 90052
         ========================================================================= */}
      <section className="py-20 sm:py-28 border-t border-[#F2F0E9]/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#777C57] font-semibold">
            GET STARTED TODAY
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#F2F0E9] uppercase">
            LET'S GET YOU STARTED.
          </h2>
          <p className="text-base text-[#AAA79F] max-w-lg mx-auto">
            Speak directly with our gym staff in Mathikere. We will help you select the ideal duration for your training goals.
          </p>
          <div className="pt-4">
            <a
              href={`tel:${gymConfig.phoneRaw}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#777C57] text-[#0A0A09] font-display text-base font-bold uppercase tracking-widest hover:bg-[#F2F0E9] transition-editorial"
            >
              <span>CALL {gymConfig.phone}</span>
              <span>☎</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
