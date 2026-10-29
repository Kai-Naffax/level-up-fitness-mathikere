import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <div className="bg-[#0A0A09] text-[#F2F0E9] min-h-[80vh] flex items-center justify-center pt-24 px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#777C57] font-semibold">
          ERROR 404
        </span>
        <h1 className="font-display text-5xl sm:text-6xl font-bold uppercase tracking-tight text-[#F2F0E9]">
          PAGE NOT FOUND
        </h1>
        <p className="text-sm text-[#AAA79F] leading-relaxed">
          The page you are looking for does not exist or has been relocated.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 bg-[#777C57] text-[#0A0A09] font-display text-xs font-bold uppercase tracking-widest hover:bg-[#F2F0E9] transition-editorial text-center"
          >
            RETURN HOME
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto px-6 py-3 border border-[#F2F0E9]/20 text-[#F2F0E9] font-display text-xs font-semibold uppercase tracking-widest hover:border-[#777C57] hover:text-[#777C57] transition-editorial text-center"
          >
            CONTACT DESK
          </Link>
        </div>
      </div>
    </div>
  );
};
