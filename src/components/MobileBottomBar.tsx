import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { gymConfig } from '../data/gymConfig';

export const MobileBottomBar: React.FC = () => {
  const location = useLocation();

  return (
    <aside
      aria-label="Mobile quick actions"
      className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-[#0A0A09]/95 backdrop-blur-md border-t border-[#F2F0E9]/15 px-4 pt-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-2xl transition-all"
    >
      <div className="flex items-center gap-3 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href={`tel:${gymConfig.phoneRaw}`}
          className="flex-1 py-3 px-4 bg-[#171715] border border-[#F2F0E9]/20 text-[#F2F0E9] text-[11px] font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 active:bg-[#242421]"
        >
          <span className="text-[#777C57] text-sm">☎</span>
          <span>CALL GYM</span>
        </a>

        {/* Dynamic Context Button: Enquire or Directions */}
        {location.pathname === '/contact' ? (
          <a
            href={gymConfig.googleSnapshot.mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-4 bg-[#777C57] text-[#0A0A09] text-[11px] font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 active:bg-[#F2F0E9]"
          >
            <span>DIRECTIONS</span>
            <span>↗</span>
          </a>
        ) : (
          <Link
            to="/membership#enquiry-section"
            className="flex-1 py-3 px-4 bg-[#777C57] text-[#0A0A09] text-[11px] font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 active:bg-[#F2F0E9]"
          >
            <span>ENQUIRE NOW</span>
            <span>→</span>
          </Link>
        )}
      </div>
    </aside>
  );
};
