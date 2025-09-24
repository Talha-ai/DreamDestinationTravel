// import { useEffect, useRef, useState } from 'react';

// const CustomCursor = () => {
//   const cursorRef = useRef<HTMLDivElement>(null);
//   const [isHovering, setIsHovering] = useState(false);
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
//   const [cursorAngle, setCursorAngle] = useState(0);
//   const [trail, setTrail] = useState<
//     Array<{ x: number; y: number; id: number; delay: number }>
//   >([]);
//   const [isMoving, setIsMoving] = useState(false);

//   const lastPosition = useRef({ x: 0, y: 0 });
//   const lastTime = useRef(Date.now());
//   const animationFrame = useRef<number>();
//   const movingTimeout = useRef<NodeJS.Timeout>();

//   useEffect(() => {
//     // Hide default cursor
//     document.body.style.cursor = 'none';
//     document.documentElement.style.cursor = 'none';

//     const handleMouseMove = (e: MouseEvent) => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - lastTime.current;

//       // Calculate movement
//       const deltaX = e.clientX - lastPosition.current.x;
//       const deltaY = e.clientY - lastPosition.current.y;
//       const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

//       // Update position immediately
//       setCursorPosition({ x: e.clientX, y: e.clientY });

//       // Set moving state
//       setIsMoving(true);
//       if (movingTimeout.current) clearTimeout(movingTimeout.current);
//       movingTimeout.current = setTimeout(() => setIsMoving(false), 100);

//       // Calculate angle based on movement direction
//       if (distance > 1) {
//         const newAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
//         setCursorAngle(newAngle);

//         // Add exhaust trail for movement
//         if (deltaTime > 20 && distance > 3) {
//           setTrail((prev) => [
//             ...prev.slice(-8), // Keep only last 8 particles
//             {
//               x: e.clientX - deltaX * 0.7, // Behind the plane
//               y: e.clientY - deltaY * 0.7,
//               id: Date.now() + Math.random(),
//               delay: 0,
//             },
//             {
//               x: e.clientX - deltaX * 1.2,
//               y: e.clientY - deltaY * 1.2,
//               id: Date.now() + Math.random() + 0.1,
//               delay: 0.1,
//             },
//           ]);
//         }
//       }

//       lastPosition.current = { x: e.clientX, y: e.clientY };
//       lastTime.current = currentTime;
//     };

//     const handleMouseOver = (e: MouseEvent) => {
//       const target = e.target as HTMLElement;
//       if (
//         target.tagName === 'BUTTON' ||
//         target.tagName === 'A' ||
//         target.closest('button') ||
//         target.closest('a') ||
//         target.classList.contains('cursor-hover') ||
//         target.closest('.cursor-hover') ||
//         target.style.cursor === 'pointer'
//       ) {
//         setIsHovering(true);
//       }
//     };

//     const handleMouseOut = (e: MouseEvent) => {
//       const relatedTarget = e.relatedTarget as HTMLElement;
//       if (
//         !relatedTarget ||
//         (relatedTarget.tagName !== 'BUTTON' &&
//           relatedTarget.tagName !== 'A' &&
//           !relatedTarget.closest('button') &&
//           !relatedTarget.closest('a') &&
//           !relatedTarget.classList.contains('cursor-hover') &&
//           !relatedTarget.closest('.cursor-hover') &&
//           relatedTarget.style.cursor !== 'pointer')
//       ) {
//         setIsHovering(false);
//       }
//     };

//     // Cleanup trail particles
//     const cleanupTrail = () => {
//       setTrail((prev) => prev.filter((p) => Date.now() - p.id < 800));
//       animationFrame.current = requestAnimationFrame(cleanupTrail);
//     };
//     cleanupTrail();

//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseover', handleMouseOver);
//     document.addEventListener('mouseout', handleMouseOut);

//     return () => {
//       document.body.style.cursor = 'auto';
//       document.documentElement.style.cursor = 'auto';
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseover', handleMouseOver);
//       document.removeEventListener('mouseout', handleMouseOut);
//       if (animationFrame.current) {
//         cancelAnimationFrame(animationFrame.current);
//       }
//       if (movingTimeout.current) {
//         clearTimeout(movingTimeout.current);
//       }
//     };
//   }, []);

//   return (
//     <>
//       {/* CSS Styles */}
//       <style>{`
//         :root {
//           --cursor-x: ${cursorPosition.x}px;
//           --cursor-y: ${cursorPosition.y}px;
//           --cursor-angle: ${cursorAngle}deg;
//         }

//         * {
//           cursor: none !important;
//         }

//         .travel-cursor {
//           position: fixed;
//           left: var(--cursor-x);
//           top: var(--cursor-y);
//           transform: translate(-50%, -50%) rotate(var(--cursor-angle));
//           pointer-events: none;
//           z-index: 999999;
//           transition: transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
//           will-change: transform;
//         }

//         .travel-cursor.hovering {
//           animation: plane-hover 0.4s ease-out forwards;
//         }

//         .travel-cursor.moving .plane-body {
//           filter: drop-shadow(0 0 20px rgba(255, 107, 53, 0.8))
//                   drop-shadow(0 0 40px rgba(255, 165, 0, 0.6))
//                   drop-shadow(0 0 60px rgba(255, 107, 53, 0.4));
//         }

//         @keyframes plane-hover {
//           0% {
//             transform: translate(-50%, -50%) rotate(var(--cursor-angle)) scale(1);
//           }
//           50% {
//             transform: translate(-50%, -50%) rotate(var(--cursor-angle)) scale(1.3);
//           }
//           100% {
//             transform: translate(-50%, -50%) rotate(var(--cursor-angle)) scale(1.15);
//           }
//         }

//         @keyframes exhaust-fade {
//           0% {
//             opacity: 0.9;
//             transform: translate(-50%, -50%) scale(1);
//           }
//           100% {
//             opacity: 0;
//             transform: translate(-50%, -50%) scale(0.3);
//           }
//         }

//         @keyframes engine-glow {
//           0%, 100% {
//             opacity: 0.8;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 1;
//             transform: scale(1.1);
//           }
//         }

//         .exhaust-particle {
//           position: fixed;
//           width: 16px;
//           height: 16px;
//           background: radial-gradient(
//             circle,
//             rgba(255, 107, 53, 0.9) 0%,
//             rgba(255, 165, 0, 0.7) 30%,
//             rgba(255, 69, 0, 0.5) 60%,
//             transparent 100%
//           );
//           border-radius: 50%;
//           pointer-events: none;
//           z-index: 999998;
//           animation: exhaust-fade 0.8s ease-out forwards;
//           box-shadow: 0 0 12px rgba(255, 107, 53, 0.6);
//         }

//         .plane-body {
//           transition: filter 0.2s ease;
//         }

//         .engine-glow {
//           animation: engine-glow 0.5s ease-in-out infinite;
//         }
//       `}</style>

//       {/* Exhaust Trail Particles */}
//       {trail.map((particle, index) => (
//         <div
//           key={particle.id}
//           className="exhaust-particle"
//           style={{
//             left: `${particle.x}px`,
//             top: `${particle.y}px`,
//             transform: 'translate(-50%, -50%)',
//             animationDelay: `${particle.delay}s`,
//             opacity: Math.max(0.1, 1 - index * 0.15),
//           }}
//         />
//       ))}

//       {/* Main Cursor - Plane */}
//       <div
//         ref={cursorRef}
//         className={`travel-cursor ${isHovering ? 'hovering' : ''} ${
//           isMoving ? 'moving' : ''
//         }`}
//       >
//         <div className="relative">
//           {/* Plane Body */}
//           <div className="plane-body">
//             <svg
//               width="48"
//               height="48"
//               viewBox="0 0 100 100"
//               className="drop-shadow-lg"
//             >
//               {/* Plane Body - Orange to Red Gradient */}
//               <defs>
//                 <linearGradient
//                   id="planeGradient"
//                   x1="0%"
//                   y1="0%"
//                   x2="100%"
//                   y2="0%"
//                 >
//                   <stop offset="0%" stopColor="#FF6B35" />
//                   <stop offset="50%" stopColor="#FF8C00" />
//                   <stop offset="100%" stopColor="#FF4500" />
//                 </linearGradient>
//                 <linearGradient
//                   id="wingGradient"
//                   x1="0%"
//                   y1="0%"
//                   x2="100%"
//                   y2="100%"
//                 >
//                   <stop offset="0%" stopColor="#FF8C00" />
//                   <stop offset="100%" stopColor="#FF6B35" />
//                 </linearGradient>
//               </defs>

//               {/* Main Body */}
//               <ellipse
//                 cx="50"
//                 cy="50"
//                 rx="35"
//                 ry="8"
//                 fill="url(#planeGradient)"
//               />

//               {/* Nose */}
//               <ellipse cx="75" cy="50" rx="12" ry="6" fill="#FF4500" />

//               {/* Wings */}
//               <ellipse
//                 cx="45"
//                 cy="35"
//                 rx="15"
//                 ry="4"
//                 fill="url(#wingGradient)"
//                 transform="rotate(-20 45 35)"
//               />
//               <ellipse
//                 cx="45"
//                 cy="65"
//                 rx="15"
//                 ry="4"
//                 fill="url(#wingGradient)"
//                 transform="rotate(20 45 65)"
//               />

//               {/* Tail */}
//               <ellipse
//                 cx="20"
//                 cy="45"
//                 rx="8"
//                 ry="3"
//                 fill="#FF6B35"
//                 transform="rotate(-15 20 45)"
//               />
//               <ellipse
//                 cx="20"
//                 cy="55"
//                 rx="8"
//                 ry="3"
//                 fill="#FF6B35"
//                 transform="rotate(15 20 55)"
//               />

//               {/* Cockpit */}
//               <ellipse
//                 cx="65"
//                 cy="50"
//                 rx="6"
//                 ry="4"
//                 fill="rgba(255, 255, 255, 0.3)"
//               />

//               {/* Engine Glow */}
//               <ellipse
//                 cx="85"
//                 cy="50"
//                 rx="8"
//                 ry="4"
//                 fill="#FFD700"
//                 opacity="0.8"
//                 className="engine-glow"
//               />
//             </svg>
//           </div>

//           {/* Navigation Lights */}
//           <div
//             className="absolute -top-2 left-4 w-2 h-2 bg-red-400 rounded-full opacity-90 animate-pulse"
//             style={{ animationDuration: '1.5s' }}
//           />
//           <div
//             className="absolute -bottom-2 left-4 w-2 h-2 bg-green-400 rounded-full opacity-90 animate-pulse"
//             style={{ animationDuration: '1.8s' }}
//           />

//           {/* Beacon Light */}
//           <div
//             className="absolute top-1/2 right-0 w-1.5 h-1.5 bg-white rounded-full opacity-95 animate-pulse transform -translate-y-1/2"
//             style={{ animationDuration: '0.8s' }}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default CustomCursor;

import { useEffect, useRef, useState, useCallback } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorAngle, setCursorAngle] = useState(-45);
  const [trail, setTrail] = useState<
    Array<{ x: number; y: number; id: number }>
  >([]);

  const lastPosition = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>();
  const trailCleanupId = useRef<number>();
  const [isDesktop, setIsDesktop] = useState(true);

  // Optimized mouse move handler with throttling
  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Cancel previous animation frame
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }

    rafId.current = requestAnimationFrame(() => {
      const deltaX = e.clientX - lastPosition.current.x;
      const deltaY = e.clientY - lastPosition.current.y;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      // Update position
      setCursorPosition({ x: e.clientX, y: e.clientY });

      // Only update angle if there's significant movement (reduces repaints)
      if (distance > 2) {
        const newAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        setCursorAngle(newAngle);

        // Add trail only for significant movement (performance optimization)
        if (distance > 5) {
          setTrail((prev) => [
            ...prev.slice(-4), // Keep only 4 trail particles max
            {
              x: e.clientX - deltaX * 0.5,
              y: e.clientY - deltaY * 0.5,
              id: performance.now(),
            },
          ]);
        }
      }

      lastPosition.current = { x: e.clientX, y: e.clientY };
    });
  }, []);

  // Optimized hover detection
  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const isInteractive =
      target.tagName === 'BUTTON' ||
      target.tagName === 'A' ||
      target.closest('button') ||
      target.closest('a') ||
      target.classList.contains('cursor-hover') ||
      window.getComputedStyle(target).cursor === 'pointer';

    if (isInteractive) {
      setIsHovering(true);
    }
  }, []);

  const handleMouseOut = useCallback(() => {
    setIsHovering(false);
  }, []);

  useEffect(() => {
    // Hide default cursor
    const style = document.createElement('style');
    style.textContent = `
      * { cursor: none !important; }
      body, html { cursor: none !important; }
    `;
    document.head.appendChild(style);

    // Optimized trail cleanup
    const cleanupTrail = () => {
      setTrail((prev) => prev.filter((p) => performance.now() - p.id < 600));
      trailCleanupId.current = requestAnimationFrame(cleanupTrail);
    };
    cleanupTrail();

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseout', handleMouseOut, { passive: true });

    return () => {
      document.head.removeChild(style);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);

      if (rafId.current) cancelAnimationFrame(rafId.current);
      if (trailCleanupId.current) cancelAnimationFrame(trailCleanupId.current);
    };
  }, [handleMouseMove, handleMouseOver, handleMouseOut]);

  useEffect(() => {
    // Check once on mount
    const checkDevice = () => {
      setIsDesktop(window.innerWidth > 768); // show only if larger than tablet size
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <>
      {/* Optimized CSS with transform3d for GPU acceleration */}
      <style>{`
        .paper-plane-cursor {
          position: fixed;
          left: ${cursorPosition.x}px;
          top: ${cursorPosition.y}px;
          transform: translate3d(-50%, -50%, 0) rotate(${cursorAngle}deg);
          pointer-events: none;
          z-index: 999999;
          will-change: transform;
          transition: transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .paper-plane-cursor.hovering {
          transform: translate3d(-50%, -50%, 0) rotate(${cursorAngle}deg) scale(1.2);
        }

        .paper-plane-cursor.hovering .paper-plane {
          filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.6));
        }

        .paper-plane {
          width: 28px;
          height: 28px;
          transition: filter 0.2s ease;
          transform: translate3d(0, 0, 0);
        }

        .trail-dot {
          position: fixed;
          width: 4px;
          height: 4px;
          background: rgba(59, 130, 246, 0.6);
          border-radius: 50%;
          pointer-events: none;
          z-index: 999998;
          transform: translate3d(-50%, -50%, 0);
          animation: trail-fade 0.6s ease-out forwards;
        }

        @keyframes trail-fade {
          0% {
            opacity: 0.8;
            transform: translate3d(-50%, -50%, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate3d(-50%, -50%, 0) scale(0.3);
          }
        }
      `}</style>

      {/* Minimal trail particles for performance */}
      {trail.map((particle, index) => (
        <div
          key={particle.id}
          className="trail-dot"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            animationDelay: `${index * 0.1}s`,
          }}
        />
      ))}

      {/* Paper Plane Cursor */}
      <div
        ref={cursorRef}
        className={`paper-plane-cursor ${isHovering ? 'hovering' : ''}`}
      >
        <div className="paper-plane">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Paper plane with clean, minimal design */}
            <defs>
              <linearGradient
                id="paperGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#f8fafc" />
                <stop offset="50%" stopColor="#e2e8f0" />
                <stop offset="100%" stopColor="#cbd5e1" />
              </linearGradient>
              <linearGradient
                id="shadowGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>
            </defs>

            {/* Paper plane body */}
            <path
              d="M2 21l21-9L2 3v7l15 2-15 2v7z"
              fill="url(#paperGradient)"
              stroke="url(#shadowGradient)"
              strokeWidth="0.5"
              strokeLinejoin="round"
            />

            {/* Fold line for realism */}
            <line
              x1="2"
              y1="12"
              x2="17"
              y2="12"
              stroke="#94a3b8"
              strokeWidth="0.3"
              opacity="0.6"
            />

            {/* Wing fold */}
            <line
              x1="7"
              y1="8"
              x2="15"
              y2="11"
              stroke="#94a3b8"
              strokeWidth="0.3"
              opacity="0.4"
            />
            <line
              x1="7"
              y1="16"
              x2="15"
              y2="13"
              stroke="#94a3b8"
              strokeWidth="0.3"
              opacity="0.4"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default CustomCursor;
