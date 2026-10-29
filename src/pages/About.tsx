import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';

export const About: React.FC = () => {
  return (
    <div className="bg-[#0A0A09] text-[#F2F0E9] min-h-screen">
      {/* Page Hero Header */}
      <PageHeader
        eyebrow="ABOUT LEVEL UP FITNESS"
        headline="A BETTER PLACE TO PUT IN THE WORK."
        supportingText="Fitness is built through consistency, the right environment, and people who help you keep going. Level Up Fitness brings those elements together in Mathikere."
        showRating={true}
      />

      {/* Hero Visual Composition */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-[#171715] border border-[#F2F0E9]/10">
          <img
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1800&q=80"
            alt="Strength and conditioning floor at Level Up Fitness Mathikere"
            className="w-full h-full object-cover img-editorial"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A09] via-transparent to-transparent opacity-70" />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 max-w-lg p-4 bg-[#0A0A09]/90 border border-[#F2F0E9]/10">
            <p className="text-[10px] font-mono uppercase text-[#777C57] tracking-wider">
              REAL TRAINING CULTURE
            </p>
            <p className="text-xs sm:text-sm text-[#F2F0E9] mt-0.5">
              A purposeful training environment opposite JP Park ground built for lifters of all backgrounds.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR PHILOSOPHY
          Headline: PROGRESS IS PERSONAL.
          Three principles: 01 CONSISTENCY, 02 GUIDANCE, 03 COMMUNITY
         ========================================================================= */}
      <section className="py-20 sm:py-28 border-t border-[#F2F0E9]/10 bg-[#171715]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#777C57] font-semibold">
              OUR GUIDING PRINCIPLES
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F2F0E9] uppercase mt-2">
              PROGRESS IS PERSONAL.
            </h2>
            <p className="mt-4 text-base text-[#AAA79F] leading-relaxed">
              We focus on fundamentals that deliver long-term results without gimmicks, artificial extremes, or intimidating atmospheres.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Principle 01 */}
            <div className="p-8 bg-[#0A0A09] border border-[#F2F0E9]/10 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#777C57] font-semibold tracking-wider">
                  01 — HABIT
                </span>
                <h3 className="font-display text-2xl text-[#F2F0E9] uppercase tracking-wide mt-3">
                  CONSISTENCY
                </h3>
                <p className="mt-4 text-sm text-[#AAA79F] leading-relaxed">
                  Build habits that you can maintain. Real strength and stamina aren't achieved in an aggressive two-week sprint, but through steady, repeatable daily effort.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#F2F0E9]/10 text-[11px] font-mono uppercase text-[#AAA79F]">
                Sustainable Routine
              </div>
            </div>

            {/* Principle 02 */}
            <div className="p-8 bg-[#0A0A09] border border-[#F2F0E9]/10 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#777C57] font-semibold tracking-wider">
                  02 — KNOWLEDGE
                </span>
                <h3 className="font-display text-2xl text-[#F2F0E9] uppercase tracking-wide mt-3">
                  GUIDANCE
                </h3>
                <p className="mt-4 text-sm text-[#AAA79F] leading-relaxed">
                  Get support when you need direction. Our floor trainers take the time to teach correct form, answer questions, and ensure you lift safely with confidence.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#F2F0E9]/10 text-[11px] font-mono uppercase text-[#AAA79F]">
                Knowledgeable Coaching
              </div>
            </div>

            {/* Principle 03 */}
            <div className="p-8 bg-[#0A0A09] border border-[#F2F0E9]/10 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#777C57] font-semibold tracking-wider">
                  03 — ENVIRONMENT
                </span>
                <h3 className="font-display text-2xl text-[#F2F0E9] uppercase tracking-wide mt-3">
                  COMMUNITY
                </h3>
                <p className="mt-4 text-sm text-[#AAA79F] leading-relaxed">
                  Train in an environment that feels motivating and welcoming. Mutual respect across all experience levels is what makes our Mathikere space special.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#F2F0E9]/10 text-[11px] font-mono uppercase text-[#AAA79F]">
                Motivating Culture
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          THE TRAINING ENVIRONMENT
          Qualities reflected in member feedback:
          Spacious workout area, clean maintained equipment, helpful trainers, friendly atmosphere.
         ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Content Grid */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#777C57] font-semibold">
                THE SPACE
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F2F0E9] uppercase mt-2">
                THE TRAINING ENVIRONMENT
              </h2>
              <p className="mt-4 text-base text-[#AAA79F] leading-relaxed">
                What you experience every day when you step inside Level Up Fitness:
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="font-mono text-sm text-[#777C57] font-bold">✓</span>
                <div>
                  <h4 className="font-display text-base uppercase text-[#F2F0E9]">
                    Spacious Workout Area
                  </h4>
                  <p className="text-xs sm:text-sm text-[#AAA79F] mt-0.5">
                    Thoughtful equipment arrangement provides ample personal space to execute lifts and move freely.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="font-mono text-sm text-[#777C57] font-bold">✓</span>
                <div>
                  <h4 className="font-display text-base uppercase text-[#F2F0E9]">
                    Clean & Maintained Equipment
                  </h4>
                  <p className="text-xs sm:text-sm text-[#AAA79F] mt-0.5">
                    Machines, benches, cables, and weights are routinely checked and maintained in working order.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="font-mono text-sm text-[#777C57] font-bold">✓</span>
                <div>
                  <h4 className="font-display text-base uppercase text-[#F2F0E9]">
                    Helpful & Patient Trainers
                  </h4>
                  <p className="text-xs sm:text-sm text-[#AAA79F] mt-0.5">
                    Experienced coaches ready to guide you without aggressive upselling or judgment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="font-mono text-sm text-[#777C57] font-bold">✓</span>
                <div>
                  <h4 className="font-display text-base uppercase text-[#F2F0E9]">
                    Friendly Atmosphere
                  </h4>
                  <p className="text-xs sm:text-sm text-[#AAA79F] mt-0.5">
                    A respectful neighbourhood gym where members encourage each other every day.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Asymmetrical photo collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden bg-[#171715] border border-[#F2F0E9]/10 aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80"
                  alt="Dumbbells and weights rack"
                  className="w-full h-full object-cover img-editorial"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden bg-[#171715] border border-[#F2F0E9]/10 aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"
                  alt="Barbell bench and plates"
                  className="w-full h-full object-cover img-editorial"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="overflow-hidden bg-[#171715] border border-[#F2F0E9]/10 aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=600&q=80"
                  alt="Cable machine system"
                  className="w-full h-full object-cover img-editorial"
                  loading="lazy"
                />
              </div>
              <div className="p-6 bg-[#171715] border border-[#F2F0E9]/10 flex flex-col justify-center">
                <span className="font-mono text-xs text-[#777C57] font-semibold">MATHIKERE GYM</span>
                <p className="font-display text-lg text-[#F2F0E9] uppercase mt-1">
                  NO GIMMICKS. JUST WORK.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR APPROACH
          Split section: SERIOUS ABOUT TRAINING. WELCOMING TO EVERYONE.
         ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#171715] border-t border-[#F2F0E9]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#777C57] font-semibold">
                TRAINING INCLUSIVITY
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F2F0E9] uppercase mt-2">
                SERIOUS ABOUT TRAINING.
                <br />
                <span className="text-[#AAA79F]">WELCOMING TO EVERYONE.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#AAA79F] leading-relaxed">
              <p>
                People join a gym for very different reasons: some want to increase their squat or build muscle, others want to improve cardiovascular stamina, manage daily stress, or regain mobility after years at a desk.
              </p>
              <p>
                At Level Up Fitness, we believe everyone deserves access to high-quality training equipment and professional encouragement. We don't make unrealistic transformation promises or clinical guarantees; instead, we build the conditions under which you can succeed through steady personal effort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CLOSING CTA
          YOUR NEXT CHAPTER STARTS HERE. -> /membership
         ========================================================================= */}
      <section className="py-20 sm:py-28 border-t border-[#F2F0E9]/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#777C57] font-semibold">
            START YOUR JOURNEY
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#F2F0E9] uppercase">
            YOUR NEXT CHAPTER STARTS HERE.
          </h2>
          <p className="text-base text-[#AAA79F] max-w-lg mx-auto">
            Explore our membership structure or talk directly to our team about beginning your training in Mathikere.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/membership"
              className="px-8 py-4 bg-[#777C57] text-[#0A0A09] font-display text-sm font-bold uppercase tracking-widest hover:bg-[#F2F0E9] transition-editorial text-center"
            >
              EXPLORE MEMBERSHIPS
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-[#F2F0E9]/30 text-[#F2F0E9] font-display text-sm font-semibold uppercase tracking-widest hover:border-[#777C57] hover:text-[#777C57] transition-editorial text-center"
            >
              VISIT THE GYM
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
