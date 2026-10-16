import React, { useState, useEffect, useRef } from 'react';

export const DraggableWhatsAppButton: React.FC = () => {
  // Store position in pixels from top-left, or null for initial bottom-right calculation
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  
  const buttonRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<{ startX: number; startY: number; initialX: number; initialY: number }>({
    startX: 0,
    startY: 0,
    initialX: 0,
    initialY: 0,
  });
  const movementDistanceRef = useRef(0);

  // Set default initial position at bottom-right of viewport on mount
  useEffect(() => {
    const calculateInitialPos = () => {
      const btnWidth = 140;
      const btnHeight = 44;
      const margin = 24;
      const x = Math.max(margin, window.innerWidth - btnWidth - margin);
      const y = Math.max(margin, window.innerHeight - btnHeight - margin);
      setPosition((prev) => prev ?? { x, y });
    };

    calculateInitialPos();
    window.addEventListener('resize', calculateInitialPos);
    return () => window.removeEventListener('resize', calculateInitialPos);
  }, []);

  // Handle pointer down (mouse or touch)
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Only left click or single touch
    if (e.button !== 0) return;

    const currentX = position?.x ?? (window.innerWidth - 164);
    const currentY = position?.y ?? (window.innerHeight - 68);

    dragStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialX: currentX,
      initialY: currentY,
    };
    movementDistanceRef.current = 0;
    setIsDragging(true);
    setHasMoved(false);

    // Capture pointer events
    if (buttonRef.current) {
      buttonRef.current.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const dx = e.clientX - dragStartRef.current.startX;
    const dy = e.clientY - dragStartRef.current.startY;
    const dist = Math.hypot(dx, dy);
    movementDistanceRef.current = dist;

    if (dist > 4) {
      setHasMoved(true);
    }

    const btnWidth = buttonRef.current?.offsetWidth || 140;
    const btnHeight = buttonRef.current?.offsetHeight || 44;
    const padding = 12;

    const newX = Math.min(
      Math.max(padding, dragStartRef.current.initialX + dx),
      window.innerWidth - btnWidth - padding
    );
    const newY = Math.min(
      Math.max(padding, dragStartRef.current.initialY + dy),
      window.innerHeight - btnHeight - padding
    );

    setPosition({ x: newX, y: newY });
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setIsDragging(false);

    if (buttonRef.current) {
      try {
        buttonRef.current.releasePointerCapture(e.pointerId);
      } catch {
        // ignore if pointer capture was already lost
      }
    }

    // If movement was minimal, consider it an intentional click
    if (movementDistanceRef.current < 5) {
      handleClick();
    }
  };

  const handleClick = () => {
    window.open('https://wa.me/50362689260?text=Hola%20Accerto,%20deseo%20asesor%C3%ADa%20directa', '_blank', 'noopener,noreferrer');
  };

  // If initial position hasn't calculated yet, render offscreen briefly
  const style: React.CSSProperties = position
    ? {
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        touchAction: 'none',
        userSelect: 'none',
      }
    : {
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        touchAction: 'none',
        userSelect: 'none',
      };

  return (
    <div
      ref={buttonRef}
      style={style}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => setIsDragging(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label="Contactar por WhatsApp (botón movible)"
      title="WhatsApp • Mantén presionado para mover a cualquier posición"
      className={`z-50 flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-2xl border border-white/30 font-semibold transition-shadow select-none ${
        isDragging
          ? 'cursor-grabbing scale-105 shadow-2xl ring-2 ring-white/60 bg-[#20ba5a]'
          : 'cursor-grab hover:scale-102 hover:bg-[#20ba5a]'
      }`}
    >
      {/* Tiny Drag Dots indicator */}
      <span className="material-symbols-outlined text-[14px] text-white/70 -mr-0.5 select-none pointer-events-none">
        drag_indicator
      </span>

      {/* Official WhatsApp SVG Logo */}
      <svg
        className="w-5 h-5 fill-current shrink-0 pointer-events-none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>

      {/* Button Text */}
      <span className="text-xs font-bold tracking-tight pointer-events-none pr-1">
        WhatsApp
      </span>
    </div>
  );
};
