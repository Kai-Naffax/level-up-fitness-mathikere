import React from 'react';
import { Link } from 'react-router-dom';
import { gymConfig } from '../data/gymConfig';
import { RatingBadge } from '../components/RatingBadge';

export const Home: React.FC = () => {
  return (
    <div className="bg-[#0A0A09] text-[#F2F0E9] min-h-screen">
      {/* =========================================================================
          HERO SECTION
          Cinematic near-fullscreen hero with side-lit strength training photography,
          editorial typography, verified Google rating badge, and clear calls to action.
         ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Background Image with Controlled Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=2000&q=85"
            alt="Olympic barbell and lifting setup in Level Up Fitness Mathikere training atmosphere"
            className="w-full h-full object-cover object-center scale-[1.02] filter contrast-110 brightness-[0.42]"
            loading="eager"
          />
          {/* Subtle directional gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A09] via-[#0A0A09]/60 to-[#0A0A09]/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0A0A09_90%)]" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8">
          <div className="max-w-4xl">
            {/* Editorial Eyebrow & Verified Rating */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
              <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#777C57] font-semibold uppercase">
                MATHIKERE, BENGALURU · BUILT FOR PROGRESS
              </span>
              <span className="text-[#AAA79F]/40 hidden sm:inline">|</span>
              <RatingBadge variant="hero" />
            </div>

            {/* Main Condensed Display Headline */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F2F0E9] leading-[0.92] uppercase">
              YOUR WORK.
              <br />
              YOUR STRENGTH.
              <br />
              <span className="text-[#AAA79F]">YOUR NEXT LEVEL.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#AAA79F] max-w-2xl leading-relaxed font-normal">
              A better place to train, get stronger, and keep moving forward. Find your rhythm at Level Up Fitness.
            </p>

            {/* Action Group */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/facilities"
                className="px-8 py-4 bg-[#777C57] text-[#0A0A09] font-display text-sm font-bold uppercase tracking-widest hover:bg-[#F2F0E9] transition-editorial text-center"
              >
                EXPLORE THE GYM
              </Link>
              <Link
                to="/membership"
                className="px-8 py-4 bg-transparent border border-[#F2F0E9]/30 text-[#F2F0E9] font-display text-sm font-semibold uppercase tracking-widest hover:border-[#777C57] hover:text-[#777C57] transition-editorial text-center"
              >
                VIEW MEMBERSHIPS
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom subtle scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#AAA79F]">
            SCROLL TO EXPLORE
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-[#777C57] to-transparent animate-pulse" />
        </div>
      </section>

      {/* =========================================================================
          TRUST STRIP
          Horizontal editorial strip featuring three real differentiators.
          Typography and fine dividers rather than generic cards.
         ========================================================================= */}
      <section className="border-y border-[#F2F0E9]/10 bg-[#171715] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#F2F0E9]/10">
            {gymConfig.coreDifferentiators.map((diff) => (
              <div
                key={diff.num}
                className="py-6 md:py-0 md:px-8 first:pt-0 first:md:pl-0 last:pb-0 last:md:pr-0"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-[#777C57] font-semibold">
                    {diff.num}
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl text-[#F2F0E9] uppercase tracking-wider font-bold">
                    {diff.title}
                  </h2>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-[#AAA79F] leading-relaxed">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          ABOUT PREVIEW
          Asymmetrical two-column composition with a large gym photograph.
         ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with architectural cropping */}
          <div className="lg:col-span-6 relative group">
            <div className="relative overflow-hidden bg-[#171715] border border-[#F2F0E9]/10 aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
                alt="Spacious workout floor and strength equipment at Level Up Fitness"
                className="w-full h-full object-cover img-editorial"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A09]/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#0A0A09]/90 border border-[#F2F0E9]/10 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-mono uppercase text-[#777C57] tracking-wider">
                    LOCATION SPOTLIGHT
                  </p>
                  <p className="text-xs text-[#F2F0E9] font-medium">
                    Opposite JP Park Ground, Mathikere
                  </p>
                </div>
                <span className="text-xs font-mono text-[#AAA79F]">01 / 05</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#777C57] font-semibold">
                OUR PHILOSOPHY
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F2F0E9] uppercase leading-[1.02]">
              GOOD TRAINING.
              <br />
              GOOD PEOPLE.
              <br />
              <span className="text-[#AAA79F]">REAL PROGRESS.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#AAA79F] leading-relaxed">
              Whether you're beginning your fitness journey or building on years of training, Level Up Fitness offers a welcoming environment to work toward your goals, with quality equipment and guidance when you need it.
            </p>
            <div className="pt-4 border-t border-[#F2F0E9]/10">
              <p className="text-xs text-[#AAA79F] leading-relaxed">
                No loud distractions or confusing fitness fads. Just high-caliber barbells, clean free weights, well-spaced machines, and coaches who respect your journey.
              </p>
            </div>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 text-xs sm:text-sm font-display uppercase tracking-widest text-[#F2F0E9] hover:text-[#777C57] group transition-editorial"
              >
                <span>GET TO KNOW US</span>
                <span className="text-[#777C57] group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FACILITIES PREVIEW
          Large photographic grid showcasing verified equipment categories only.
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#171715] border-t border-[#F2F0E9]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#777C57] font-semibold">
                FACILITIES & EQUIPMENT
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F2F0E9] uppercase mt-2">
                DESIGNED FOR SERIOUS REPETITIONS
              </h2>
            </div>
            <Link
              to="/facilities"
              className="inline-flex items-center gap-2 text-xs font-display uppercase tracking-widest text-[#F2F0E9] hover:text-[#777C57] group transition-editorial self-start md:self-auto"
            >
              <span>EXPLORE ALL FACILITIES</span>
              <span className="text-[#777C57] group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>

          {/* Photographic Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gymConfig.facilitiesCategories.map((item) => (
              <Link
                to="/facilities"
                key={item.id}
                className="group flex flex-col bg-[#0A0A09] border border-[#F2F0E9]/10 hover:border-[#777C57]/50 transition-editorial"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#242421]">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover img-editorial"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A09] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-lg font-bold uppercase tracking-wider text-[#F2F0E9] group-hover:text-[#777C57] transition-editorial">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#AAA79F] leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#F2F0E9]/10 flex items-center justify-between text-[11px] font-mono uppercase text-[#777C57]">
                    <span>View Category</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          MEMBER FEEDBACK & TRUST SNAPSHOT
          Refined editorial review section reflecting the real 4.9 rating and 593 reviews.
         ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Overall Snapshot Display */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#777C57] font-semibold">
                COMMUNITY REPUTATION
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F0E9] uppercase mt-2">
                GOOD REPUTATION.
                <br />
                EARNED EVERY DAY.
              </h2>
            </div>

            <div className="p-6 bg-[#171715] border border-[#F2F0E9]/10">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-5xl font-bold text-[#F2F0E9]">
                  {gymConfig.googleSnapshot.rating}
                </span>
                <div>
                  <div className="text-[#777C57] text-xl">★★★★★</div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#AAA79F]">
                    {gymConfig.googleSnapshot.reviewCount} Verified Reviews
                  </span>
                </div>
              </div>
              <p className="mt-4 text-xs text-[#AAA79F] leading-relaxed">
                Reflected on Google Maps by members who train regularly at our Mathikere facility.
              </p>
              <div className="mt-4 pt-3 border-t border-[#F2F0E9]/10">
                <a
                  href={gymConfig.googleSnapshot.mapsReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#777C57] hover:underline"
                >
                  <span>Open Google Maps listing</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Verified Feedback Highlights */}
          <div className="lg:col-span-8">
            <div className="border border-[#F2F0E9]/10 divide-y divide-[#F2F0E9]/10 bg-[#171715]">
              {gymConfig.feedbackHighlights.map((item, index) => (
                <div key={index} className="p-6 sm:p-7 hover:bg-[#242421]/30 transition-editorial">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="font-display text-lg text-[#F2F0E9] uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-[#0A0A09] text-[#777C57] border border-[#F2F0E9]/10 self-start sm:self-auto">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#AAA79F] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL CTA
          Full-width photographic section with a dark background.
         ========================================================================= */}
      <section className="relative py-24 sm:py-32 overflow-hidden border-t border-[#F2F0E9]/10">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1800&q=80"
            alt="Lifting prep on gym floor"
            className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-125"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#0A0A09]/85" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#777C57] font-semibold">
            MATHIKERE, BENGALURU
          </span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F2F0E9] uppercase">
            READY TO LEVEL UP?
          </h2>
          <p className="text-base sm:text-lg text-[#AAA79F] max-w-xl mx-auto leading-relaxed">
            Come see the space. Meet the team. Find the right way to get started.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-[#777C57] text-[#0A0A09] font-display text-sm font-bold uppercase tracking-widest hover:bg-[#F2F0E9] transition-editorial text-center"
            >
              CONTACT THE GYM
            </Link>
            <a
              href={`tel:${gymConfig.phoneRaw}`}
              className="w-full sm:w-auto px-8 py-4 border border-[#F2F0E9]/30 text-[#F2F0E9] font-display text-sm font-semibold uppercase tracking-widest hover:border-[#777C57] hover:text-[#777C57] transition-editorial text-center"
            >
              CALL {gymConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
