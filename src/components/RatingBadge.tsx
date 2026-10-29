import React from 'react';
import { gymConfig } from '../data/gymConfig';

interface RatingBadgeProps {
  variant?: 'minimal' | 'full' | 'hero';
  className?: string;
}

export const RatingBadge: React.FC<RatingBadgeProps> = ({ variant = 'minimal', className = '' }) => {
  const { rating, reviewCount, mapsReviewsUrl } = gymConfig.googleSnapshot;

  if (variant === 'hero') {
    return (
      <a
        href={mapsReviewsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Rated ${rating} out of 5 stars based on ${reviewCount} Google reviews`}
        className={`inline-flex items-center gap-3 px-3.5 py-2 rounded-none bg-[#171715]/90 border border-[#F2F0E9]/10 text-xs tracking-wider uppercase font-medium hover:border-[#777C57]/70 transition-editorial text-[#F2F0E9] ${className}`}
      >
        <span className="flex items-center text-[#777C57]">
          ★ <strong className="ml-1 text-[#F2F0E9] font-semibold">{rating}</strong>
        </span>
        <span className="w-px h-3 bg-[#F2F0E9]/20" aria-hidden="true" />
        <span className="text-[#AAA79F]">{reviewCount} Google Reviews</span>
        <span className="text-[10px] text-[#777C57] underline ml-0.5">Verify ↗</span>
      </a>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`p-6 bg-[#171715] border border-[#F2F0E9]/10 ${className}`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#F2F0E9]/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-display font-semibold tracking-wider text-[#F2F0E9]">
                {rating}
              </span>
              <div className="flex text-[#777C57] text-lg">
                ★★★★★
              </div>
            </div>
            <p className="text-xs uppercase tracking-widest text-[#AAA79F] mt-1">
              Google Maps Rating Snapshot
            </p>
          </div>
          <a
            href={mapsReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#F2F0E9] hover:text-[#777C57] transition-editorial self-start sm:self-center"
          >
            <span>Read 593 Google Reviews</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="text-xs text-[#AAA79F] mt-3 leading-relaxed">
          Based on verified feedback from 593 gym members praising clean facilities, spacious floor, quality equipment, and patient trainer guidance in Mathikere.
        </p>
      </div>
    );
  }

  return (
    <a
      href={mapsReviewsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#AAA79F] hover:text-[#F2F0E9] transition-editorial ${className}`}
    >
      <span className="text-[#777C57]">★</span>
      <span className="text-[#F2F0E9] font-medium">{rating}</span>
      <span>·</span>
      <span>{reviewCount} Reviews</span>
      <span className="text-[#777C57]">↗</span>
    </a>
  );
};
