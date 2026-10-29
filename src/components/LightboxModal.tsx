import React, { useEffect } from 'react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  category: string;
  alt: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  category,
  alt,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0A0A09]/95 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col bg-[#171715] border border-[#F2F0E9]/15"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[#F2F0E9]/10 bg-[#0A0A09]">
          <div>
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#777C57]">
              {category}
            </span>
            <h4 className="font-display text-lg text-[#F2F0E9] uppercase tracking-wide">
              {title}
            </h4>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#AAA79F] hover:text-[#F2F0E9] transition-editorial focus:outline-none"
            aria-label="Close image viewer"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Image viewport */}
        <div className="relative overflow-hidden flex items-center justify-center bg-black/50 p-2 sm:p-4">
          <img
            src={imageUrl}
            alt={alt}
            className="max-h-[70vh] w-auto max-w-full object-contain select-none"
          />
        </div>

        {/* Bottom caption */}
        <div className="px-5 py-3 text-xs text-[#AAA79F] flex justify-between items-center border-t border-[#F2F0E9]/10 bg-[#0A0A09]">
          <span>Level Up Fitness · Mathikere Facilities</span>
          <span className="text-[11px] text-[#777C57]">ESC to close</span>
        </div>
      </div>
    </div>
  );
};
