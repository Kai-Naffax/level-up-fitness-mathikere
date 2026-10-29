import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [isPointerDevice, setIsPointerDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Current mouse coordinates and lerped trailing coordinates
  const mousePos = useRef({ x: -100, y: -100 });
  const trailPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only activate for PC / devices with a mouse (fine pointer and hover capability)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    
    const checkDevice = () => {
      setIsPointerDevice(mediaQuery.matches);
    };

    checkDevice();
    mediaQuery.addEventListener('change', checkDevice);

    if (!mediaQuery.matches) {
      return () => {
        mediaQuery.removeEventListener('change', checkDevice);
      };
    }

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    // Detect if hovering over clickable or interactive elements
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = !!target.closest(
        'a, button, input, select, textarea, [role="button"], label, [data-cursor-hover]'
      );
      setIsHovered(isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseover', onMouseOver, { passive: true });

    // Smooth physics loop for the trailing glow aura
    const render = () => {
      // Lerp smoothing (linear interpolation)
      const ease = 0.18;
      trailPos.current.x += (mousePos.current.x - trailPos.current.x) * ease;
      trailPos.current.y += (mousePos.current.y - trailPos.current.y) * ease;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${trailPos.current.x}px, ${trailPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    rafId.current = requestAnimationFrame(render);

    return () => {
      mediaQuery.removeEventListener('change', checkDevice);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', onMouseOver);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  // If not a PC / fine-pointer device, do not render anything
  if (!isPointerDevice) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Outer Glow Halo with Lerp Trailing */}
      <div
        ref={glowRef}
        className={`fixed top-0 left-0 -ml-5 -mt-5 rounded-full pointer-events-none transition-all duration-200 ease-out will-change-transform ${
          isHovered
            ? 'w-14 h-14 -ml-7 -mt-7 bg-[#777C57]/20 border border-[#777C57] shadow-[0_0_25px_rgba(119,124,87,0.7),inset_0_0_15px_rgba(119,124,87,0.3)]'
            : isClicking
            ? 'w-8 h-8 -ml-4 -mt-4 bg-[#777C57]/30 border border-[#777C57]/90 shadow-[0_0_15px_rgba(119,124,87,0.5)]'
            : 'w-10 h-10 -ml-5 -mt-5 bg-[#777C57]/10 border border-[#777C57]/60 shadow-[0_0_18px_rgba(119,124,87,0.45)]'
        }`}
      />

      {/* Center Crisp Precision Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 pointer-events-none rounded-full will-change-transform transition-all duration-150 ${
          isHovered
            ? 'w-2 h-2 -ml-1 -mt-1 bg-[#F2F0E9] shadow-[0_0_8px_#F2F0E9]'
            : isClicking
            ? 'w-1.5 h-1.5 -ml-[3px] -mt-[3px] bg-[#777C57]'
            : 'w-2.5 h-2.5 -ml-[5px] -mt-[5px] bg-[#F2F0E9] border border-[#777C57]'
        }`}
      />
    </div>
  );
};
