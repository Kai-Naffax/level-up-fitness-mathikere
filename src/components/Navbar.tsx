import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { gymConfig } from '../data/gymConfig';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu whenever route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Membership', path: '/membership' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A09]/95 backdrop-blur-md border-b border-[#F2F0E9]/10 py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-[#0A0A09]/80 via-[#0A0A09]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Typographic Wordmark & Location */}
          <Link
            to="/"
            className="group flex flex-col focus:outline-none focus:ring-1 focus:ring-[#777C57] focus:ring-offset-2 focus:ring-offset-[#0A0A09]"
            aria-label="Level Up Fitness Mathikere - Homepage"
          >
            <span className="font-display text-xl sm:text-2xl font-bold tracking-wider text-[#F2F0E9] group-hover:text-[#AAA79F] transition-editorial">
              LEVEL UP FITNESS
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#AAA79F] uppercase -mt-0.5">
              MATHIKERE, BENGALURU
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs tracking-[0.18em] uppercase font-medium relative py-1 transition-editorial ${
                    isActive
                      ? 'text-[#F2F0E9] font-semibold'
                      : 'text-[#AAA79F] hover:text-[#F2F0E9]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#777C57]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            {/* Direct Phone / Join CTA */}
            <Link
              to="/membership"
              className="ml-3 inline-flex items-center justify-center px-4 py-2 border border-[#777C57] bg-[#777C57]/10 text-xs font-semibold uppercase tracking-[0.18em] text-[#F2F0E9] hover:bg-[#777C57] hover:text-[#0A0A09] transition-editorial focus:outline-none focus:ring-2 focus:ring-[#777C57]"
            >
              JOIN NOW
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              to="/membership"
              className="px-3 py-1.5 border border-[#777C57] text-[10px] font-semibold uppercase tracking-wider text-[#F2F0E9] bg-[#777C57]/10"
            >
              JOIN NOW
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F2F0E9] hover:text-[#AAA79F] focus:outline-none focus:ring-1 focus:ring-[#777C57]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.75}
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M3 7h18M3 12h18M3 17h18" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 md:hidden bg-[#0A0A09] flex flex-col justify-between p-6 pt-20 animate-in fade-in duration-200"
        >
          {/* Close button at top right */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-5 right-5 p-2 text-[#F2F0E9] focus:outline-none"
            aria-label="Close menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="square" strokeLinejoin="miter" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Links list */}
          <div className="flex flex-col space-y-6 pt-6">
            <div className="border-b border-[#F2F0E9]/10 pb-3">
              <span className="text-[10px] tracking-[0.25em] text-[#777C57] uppercase font-mono">
                NAVIGATION
              </span>
            </div>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-display text-2xl uppercase tracking-wider transition-editorial flex items-center justify-between ${
                    isActive ? 'text-[#F2F0E9] pl-3 border-l-2 border-[#777C57]' : 'text-[#AAA79F]'
                  }`
                }
              >
                <span>{link.name}</span>
                <span className="text-sm font-sans text-[#777C57]">→</span>
              </NavLink>
            ))}
          </div>

          {/* Bottom details for quick access */}
          <div className="border-t border-[#F2F0E9]/10 pt-6 space-y-4">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-[#AAA79F]">Location</p>
              <p className="text-xs text-[#F2F0E9] mt-0.5">
                Athriya Towers, Tank Bund Road, Mathikere
              </p>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase text-[#AAA79F]">Direct Call</p>
              <a
                href={`tel:${gymConfig.phoneRaw}`}
                className="text-sm font-semibold text-[#F2F0E9] hover:text-[#777C57] transition-editorial block mt-0.5"
              >
                {gymConfig.phone}
              </a>
            </div>

            <Link
              to="/membership"
              className="block w-full py-3 text-center bg-[#777C57] text-[#0A0A09] text-xs font-bold uppercase tracking-widest"
            >
              ENQUIRE / JOIN NOW
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
