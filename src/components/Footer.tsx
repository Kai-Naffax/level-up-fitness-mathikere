import React from 'react';
import { Link } from 'react-router-dom';
import { gymConfig } from '../data/gymConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A09] border-t border-[#F2F0E9]/10 pt-16 pb-12 text-[#AAA79F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#F2F0E9]/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-block group">
              <span className="font-display text-2xl sm:text-3xl font-bold tracking-wider text-[#F2F0E9] group-hover:text-[#AAA79F] transition-editorial">
                {gymConfig.wordmark}
              </span>
              <span className="block text-[11px] tracking-[0.25em] text-[#777C57] uppercase font-mono mt-0.5">
                {gymConfig.locationShort}
              </span>
            </Link>
            <p className="text-sm text-[#AAA79F] max-w-md leading-relaxed">
              A welcoming, well-equipped, locally established gym where members train seriously, receive guidance, and work toward their fitness goals in Mathikere.
            </p>
            <div className="pt-2">
              <a
                href={gymConfig.googleSnapshot.mapsReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#F2F0E9] bg-[#171715] px-3 py-1.5 border border-[#F2F0E9]/10 hover:border-[#777C57] transition-editorial"
              >
                <span className="text-[#777C57]">★ 4.9</span>
                <span>·</span>
                <span>593 Google Reviews</span>
                <span className="text-[10px] text-[#777C57]">↗</span>
              </a>
            </div>
          </div>

          {/* Direct Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="font-display text-sm tracking-widest text-[#F2F0E9] uppercase">
              EXPLORE
            </h3>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider">
              <li>
                <Link to="/" className="hover:text-[#F2F0E9] transition-editorial">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#F2F0E9] transition-editorial">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-[#F2F0E9] transition-editorial">
                  Facilities
                </Link>
              </li>
              <li>
                <Link to="/membership" className="hover:text-[#F2F0E9] transition-editorial">
                  Membership Options
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#F2F0E9] transition-editorial">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Column */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-display text-sm tracking-widest text-[#F2F0E9] uppercase">
              VISIT & CONNECT
            </h3>
            <div className="space-y-3 text-xs leading-relaxed">
              <div>
                <p className="text-[#F2F0E9] font-medium">Direct Telephone</p>
                <a
                  href={`tel:${gymConfig.phoneRaw}`}
                  className="text-sm font-semibold text-[#F2F0E9] hover:text-[#777C57] transition-editorial block mt-0.5"
                >
                  {gymConfig.phone}
                </a>
              </div>
              <div>
                <p className="text-[#F2F0E9] font-medium">Gym Address</p>
                <p className="text-[#AAA79F] mt-0.5">
                  No. 14, Athriya Towers, Tank Bund Road, opposite JP Park ground, next to Reliance Supermarket, Brindavan Nagar, SBM Colony, Mathikere, Bengaluru 560054
                </p>
                <a
                  href={gymConfig.googleSnapshot.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider text-[#777C57] hover:underline mt-1"
                >
                  <span>Open in Google Maps</span>
                  <span>↗</span>
                </a>
              </div>
              <div className="pt-1">
                <p className="text-[#F2F0E9] font-medium">Hours Snapshot</p>
                <p className="text-[#AAA79F]">{gymConfig.openingHours.snapshotNote}</p>
                <p className="text-[10px] text-[#AAA79F]/80 mt-0.5">
                  Standard weekday sessions: 5:30 AM – 10:30 PM. Call ahead for holiday schedules.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] tracking-wider text-[#AAA79F]/70 gap-4">
          <p>
            © {new Date().getFullYear()} Level Up Fitness | Mathikere. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-[11px] uppercase">
            <span className="text-[#777C57]">● Operational in Mathikere</span>
            <span>Opposite JP Park Ground</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
