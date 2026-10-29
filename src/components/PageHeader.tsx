import React from 'react';
import { RatingBadge } from './RatingBadge';

interface PageHeaderProps {
  eyebrow: string;
  headline: string;
  supportingText?: string;
  showRating?: boolean;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  eyebrow,
  headline,
  supportingText,
  showRating = false,
}) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 border-b border-[#F2F0E9]/10 bg-gradient-to-b from-[#171715] to-[#0A0A09]">
      {/* Subtle architectural grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#777C57] font-semibold">
              {eyebrow}
            </span>
            {showRating && (
              <>
                <span className="text-[#AAA79F]/40">/</span>
                <RatingBadge variant="minimal" />
              </>
            )}
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F2F0E9] uppercase leading-[0.95]">
            {headline}
          </h1>

          {supportingText && (
            <p className="mt-6 text-base sm:text-lg text-[#AAA79F] max-w-2xl leading-relaxed">
              {supportingText}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
