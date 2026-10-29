import React, { useState } from 'react';
import { gymConfig } from '../data/gymConfig';
import { PageHeader } from '../components/PageHeader';
import { LightboxModal } from '../components/LightboxModal';

export const Facilities: React.FC = () => {
  const [activeImage, setActiveImage] = useState<{
    url: string;
    title: string;
    category: string;
    alt: string;
  } | null>(null);

  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Strength Training', 'Free Weights', 'Workout Equipment', 'Training Support', 'Gym Atmosphere'];

  const filteredImages = activeCategory === 'All'
    ? gymConfig.galleryImages
    : gymConfig.galleryImages.filter((img) => img.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="bg-[#0A0A09] text-[#F2F0E9] min-h-screen">
      {/* Page Header */}
      <PageHeader
        eyebrow="GYM ENVIRONMENT & EQUIPMENT"
        headline="SPACE TO TRAIN. ROOM TO GROW."
        supportingText="Explore the training environment at Level Up Fitness, Mathikere."
        showRating={true}
      />

      {/* Featured Environmental Showcase */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[16/9] md:aspect-[2.2/1] overflow-hidden bg-[#171715] border border-[#F2F0E9]/10">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=85"
            alt="Spacious workout floor at Level Up Fitness Mathikere"
            className="w-full h-full object-cover img-editorial"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A09]/90 via-[#0A0A09]/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#777C57] font-semibold">
                TRAINING FLOOR PERSPECTIVE
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-[#F2F0E9] uppercase mt-1">
                BUILT FOR DAILY DISCIPLINE
              </h3>
            </div>
            <p className="text-xs text-[#AAA79F] max-w-md">
              Clean rubber-matted surfaces, well-spaced strength stations, and ample natural airflow opposite JP Park ground.
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Deep Dive Sections */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-[#F2F0E9]/10 pt-16">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#777C57] font-semibold">
              VERIFIED FACILITY BREAKDOWN
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#F2F0E9] mt-2">
              EQUIPMENT CURATED FOR PROGRESS
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#AAA79F] leading-relaxed">
              Every area of Level Up Fitness is organized to support proper biomechanics, safety, and efficient training flow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gymConfig.facilitiesCategories.map((facility) => (
              <div
                key={facility.id}
                className="bg-[#171715] border border-[#F2F0E9]/10 p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden bg-[#242421] mb-6">
                    <img
                      src={facility.image}
                      alt={facility.imageAlt}
                      className="w-full h-full object-cover img-editorial"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[10px] font-mono uppercase text-[#777C57] tracking-wider">
                    CATEGORY
                  </span>
                  <h3 className="font-display text-2xl text-[#F2F0E9] uppercase tracking-wide mt-1">
                    {facility.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-[#AAA79F] leading-relaxed">
                    {facility.description}
                  </p>
                  
                  <div className="mt-6 pt-5 border-t border-[#F2F0E9]/10">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-[#F2F0E9] mb-3">
                      Equipment Highlights:
                    </p>
                    <ul className="space-y-2">
                      {facility.equipmentHighlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#AAA79F]">
                          <span className="text-[#777C57] font-mono">▪</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          EDITORIAL PHOTO GALLERY
          Asymmetrical grid with mixed sizes, hover micro-interactions, and lightbox viewer.
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#171715] border-t border-[#F2F0E9]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#777C57] font-semibold">
                EDITORIAL GALLERY
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F2F0E9] uppercase mt-2">
                INSIDE LEVEL UP FITNESS
              </h2>
            </div>
            
            {/* Filter pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[11px] font-mono uppercase tracking-wider px-3 py-1.5 border transition-editorial ${
                    activeCategory === cat
                      ? 'bg-[#777C57] text-[#0A0A09] border-[#777C57] font-semibold'
                      : 'bg-[#0A0A09] text-[#AAA79F] border-[#F2F0E9]/10 hover:border-[#F2F0E9]/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Asymmetrical Masonry-style Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-5 auto-rows-[280px]">
            {filteredImages.map((img) => (
              <div
                key={img.id}
                onClick={() =>
                  setActiveImage({
                    url: img.url,
                    title: img.title,
                    category: img.category,
                    alt: img.alt,
                  })
                }
                className={`relative group overflow-hidden bg-[#0A0A09] border border-[#F2F0E9]/10 cursor-pointer ${
                  img.spanClass || 'md:col-span-4 md:row-span-1'
                }`}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover img-editorial transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A09] via-transparent to-transparent opacity-85 group-hover:opacity-60 transition-opacity" />

                {/* Overlaid Title & Category */}
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#777C57]">
                      {img.category}
                    </span>
                    <h4 className="font-display text-lg text-[#F2F0E9] uppercase tracking-wide mt-0.5">
                      {img.title}
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-[#AAA79F] group-hover:text-[#777C57] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                    ↗ View
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Real Gym Photography Notice for Owner */}
          <div className="mt-8 p-4 bg-[#0A0A09] border border-[#F2F0E9]/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#AAA79F] gap-3">
            <div className="flex items-center gap-2">
              <span className="text-[#777C57] font-mono">ℹ</span>
              <span>
                <strong>Asset Architecture Notice:</strong> High-resolution photographs can be customized via the central <code className="text-[#F2F0E9] bg-[#242421] px-1 py-0.5 font-mono">gymConfig.ts</code> file.
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#777C57] whitespace-nowrap">
              Configurable Imagery
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          THE TRAINING EXPERIENCE
          Typographic layout with three points:
          QUALITY EQUIPMENT, ROOM TO TRAIN, SUPPORT WHEN NEEDED.
         ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#777C57] font-semibold">
              DAILY EXPERIENCE
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F2F0E9] uppercase mt-2">
              THE TRAINING EXPERIENCE
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-10">
            <div className="border-b border-[#F2F0E9]/10 pb-8">
              <span className="text-xs font-mono text-[#777C57] font-semibold tracking-wider">
                POINT 01
              </span>
              <h3 className="font-display text-2xl text-[#F2F0E9] uppercase tracking-wide mt-1">
                QUALITY EQUIPMENT
              </h3>
              <p className="mt-3 text-sm text-[#AAA79F] leading-relaxed">
                Train with equipment maintained for everyday use. Heavy-gauge steel, smooth bearings, calibrated plates, and sturdy platforms designed to handle your toughest workouts.
              </p>
            </div>

            <div className="border-b border-[#F2F0E9]/10 pb-8">
              <span className="text-xs font-mono text-[#777C57] font-semibold tracking-wider">
                POINT 02
              </span>
              <h3 className="font-display text-2xl text-[#F2F0E9] uppercase tracking-wide mt-1">
                ROOM TO TRAIN
              </h3>
              <p className="mt-3 text-sm text-[#AAA79F] leading-relaxed">
                Discover the gym environment in person. Our floor layout provides generous spacing between workstations so you never feel cramped or rushed during sets.
              </p>
            </div>

            <div className="pb-4">
              <span className="text-xs font-mono text-[#777C57] font-semibold tracking-wider">
                POINT 03
              </span>
              <h3 className="font-display text-2xl text-[#F2F0E9] uppercase tracking-wide mt-1">
                SUPPORT WHEN NEEDED
              </h3>
              <p className="mt-3 text-sm text-[#AAA79F] leading-relaxed">
                Ask the team about training guidance. Whether adjusting bench angles, spotting a heavy lift, or learning a new movement, our coaching team is right there on the floor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          VISIT CTA
          SEE IT FOR YOURSELF.
          Buttons: GET DIRECTIONS, CALL THE GYM
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#171715] border-t border-[#F2F0E9]/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#777C57] font-semibold">
            MATHIKERE LOCATION
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#F2F0E9] uppercase">
            SEE IT FOR YOURSELF.
          </h2>
          <p className="text-base text-[#AAA79F] max-w-lg mx-auto leading-relaxed">
            Visit Level Up Fitness in Mathikere and explore the space. Walk through the training floor and meet the team before signing up.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={gymConfig.googleSnapshot.mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#777C57] text-[#0A0A09] font-display text-sm font-bold uppercase tracking-widest hover:bg-[#F2F0E9] transition-editorial text-center"
            >
              GET DIRECTIONS ↗
            </a>
            <a
              href={`tel:${gymConfig.phoneRaw}`}
              className="px-8 py-4 border border-[#F2F0E9]/30 text-[#F2F0E9] font-display text-sm font-semibold uppercase tracking-widest hover:border-[#777C57] hover:text-[#777C57] transition-editorial text-center"
            >
              CALL {gymConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={!!activeImage}
        onClose={() => setActiveImage(null)}
        imageUrl={activeImage?.url || ''}
        title={activeImage?.title || ''}
        category={activeImage?.category || ''}
        alt={activeImage?.alt || ''}
      />
    </div>
  );
};
