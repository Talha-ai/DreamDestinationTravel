import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorAngle, setCursorAngle] = useState(0);
  const [trail, setTrail] = useState<
    Array<{ x: number; y: number; id: number }>
  >([]);

  const lastPosition = useRef({ x: 0, y: 0 });
  const lastTime = useRef(Date.now());
  const animationFrame = useRef<number>();

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';
    document.documentElement.style.cursor = 'none';

    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime.current;

      // Calculate velocity for rotation
      const deltaX = e.clientX - lastPosition.current.x;
      const deltaY = e.clientY - lastPosition.current.y;

      // Update position immediately
      setCursorPosition({ x: e.clientX, y: e.clientY });

      // Calculate angle based on movement
      if (Math.abs(deltaX) > 1 || Math.abs(deltaY) > 1) {
        const newAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        setCursorAngle(newAngle);

        // Add trail particles for fast movement
        if (deltaTime > 16 && (Math.abs(deltaX) > 2 || Math.abs(deltaY) > 2)) {
          setTrail((prev) => [
            ...prev.slice(-10), // Keep only last 10 particles
            {
              x: e.clientX,
              y: e.clientY,
              id: Date.now() + Math.random(),
            },
          ]);
        }
      }

      lastPosition.current = { x: e.clientX, y: e.clientY };
      lastTime.current = currentTime;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-hover') ||
        target.closest('.cursor-hover')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const relatedTarget = e.relatedTarget as HTMLElement;

      if (
        relatedTarget &&
        (relatedTarget.tagName === 'BUTTON' ||
          relatedTarget.tagName === 'A' ||
          relatedTarget.closest('button') ||
          relatedTarget.closest('a') ||
          relatedTarget.classList.contains('cursor-hover') ||
          relatedTarget.closest('.cursor-hover'))
      ) {
        return; // Don't remove hover if moving to another hoverable element
      }

      setIsHovering(false);
    };

    // Cleanup trail particles
    const cleanupTrail = () => {
      setTrail((prev) => prev.slice(-5)); // Keep fewer particles
      animationFrame.current = requestAnimationFrame(cleanupTrail);
    };
    cleanupTrail();

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.body.style.cursor = 'auto';
      document.documentElement.style.cursor = 'auto';
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <>
      {/* CSS Variables for cursor position */}
      <style>{`
        :root {
          --cursor-x: ${cursorPosition.x}px;
          --cursor-y: ${cursorPosition.y}px;
          --cursor-angle: ${cursorAngle}deg;
        }

        * {
          cursor: none !important;
        }

        .custom-cursor {
          position: fixed;
          left: var(--cursor-x);
          top: var(--cursor-y);
          transform: translate(-50%, -50%) rotate(var(--cursor-angle));
          pointer-events: none;
          z-index: 999999;
          transition: transform 0.1s ease-out;
          will-change: transform;
        }

        .custom-cursor.hovering {
          animation: cursor-hover 0.3s ease-out forwards;
        }

        .custom-cursor.hovering svg {
          filter: drop-shadow(0 0 12px rgba(96, 165, 250, 0.8))
            drop-shadow(0 0 24px rgba(96, 165, 250, 0.4));
        }

        @keyframes cursor-hover {
          0% {
            transform: translate(-50%, -50%) rotate(var(--cursor-angle))
              scale(1);
          }
          50% {
            transform: translate(-50%, -50%) rotate(var(--cursor-angle))
              scale(1.4);
          }
          100% {
            transform: translate(-50%, -50%) rotate(var(--cursor-angle))
              scale(1.2);
          }
        }

        @keyframes propeller-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes trail-fade {
          0% {
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.2);
          }
        }

        .trail-particle {
          position: fixed;
          width: 12px;
          height: 12px;
          background: radial-gradient(
            circle,
            rgba(59, 130, 246, 0.8) 0%,
            rgba(147, 197, 253, 0.6) 40%,
            rgba(59, 130, 246, 0.2) 70%,
            transparent 100%
          );
          border-radius: 50%;
          pointer-events: none;
          z-index: 999998;
          animation: trail-fade 0.8s ease-out forwards;
          box-shadow: 0 0 8px rgba(59, 130, 246, 0.4);
        }
      `}</style>

      {/* Trail Particles */}
      {trail.map((particle, index) => (
        <div
          key={particle.id}
          className="trail-particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            transform: 'translate(-50%, -50%)',
            animationDelay: `${index * 0.05}s`,
          }}
        />
      ))}

      {/* Main Cursor */}
      <div
        ref={cursorRef}
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
      >
        <div className="relative">
          {/* Main airplane */}
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-blue-500 transition-colors duration-200"
            style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}
          >
            <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
          </svg>

          {/* Propeller */}
          <div
            className="absolute -right-2 top-1/2 w-3 h-3 transform -translate-y-1/2"
            style={{ animation: 'propeller-spin 0.08s linear infinite' }}
          >
            <div className="absolute w-full h-0.5 bg-gray-400 top-1/2 left-0 transform -translate-y-1/2 opacity-70"></div>
            <div className="absolute w-full h-0.5 bg-gray-400 top-1/2 left-0 transform -translate-y-1/2 rotate-45 opacity-70"></div>
            <div className="absolute w-full h-0.5 bg-gray-400 top-1/2 left-0 transform -translate-y-1/2 rotate-90 opacity-70"></div>
            <div className="absolute w-full h-0.5 bg-gray-400 top-1/2 left-0 transform -translate-y-1/2 rotate-135 opacity-70"></div>
          </div>

          {/* Navigation lights */}
          <div
            className="absolute -left-2 top-2 w-1.5 h-1.5 bg-red-400 rounded-full opacity-90 animate-pulse"
            style={{ animationDuration: '2s' }}
          ></div>
          <div
            className="absolute -left-2 bottom-2 w-1.5 h-1.5 bg-green-400 rounded-full opacity-90 animate-pulse"
            style={{ animationDuration: '2.2s' }}
          ></div>

          {/* Cockpit light */}
          <div
            className="absolute right-1 top-1/2 w-1 h-1 bg-yellow-300 rounded-full opacity-80 animate-pulse transform -translate-y-1/2"
            style={{ animationDuration: '3s' }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default CustomCursor;
